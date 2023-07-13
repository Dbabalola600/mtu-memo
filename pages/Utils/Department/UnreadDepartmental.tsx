import { getCookie } from "cookies-next"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image";
import Empty_Memo from "../../../public/Empty_Memo.svg"
import { useRouter } from "next/router";

type UnreadMemo = {
    _id: String,
    user: string,
    type: string,
    title: string,
    content: string,
    date: string,
    sen: string,
    college: string,
    department: string,
    role: string,


}

type User = {
    _id: string,
    firstname: string,
    lastname: string,
    UserId: string,
    College: string,
    Department: string,
    role: string,
}








export default function UnreadDepartment() {
    const [user, setUser] = useState<User | null>(null)
    const [memos, SetMemo] = useState<UnreadMemo[]>([])
    const router = useRouter()


    const getInfo = async () => {


        const token = getCookie("NormUser")
        const body = {
            _id: token
        }

        const response = await fetch("/api/user/fetchUser", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as User
        setUser(response)


        const body2 = {
            id: token,
            name: response?.Department
        }

        const response2 = await fetch("/api/user/Memo/Department/GetUnreadDepartment", { method: "POST", body: JSON.stringify(body2) })
            .then(res => res.json()) as UnreadMemo[]

        SetMemo(response2)

    }








    useEffect(() => {
        getInfo()

    }, [])


    const Mark = async (id: any) => {

        const token = getCookie("NormUser")

        const body = {
            id: id,
            user: token
        }
        const response = await fetch("/api/user/Memo/MarkRead", { method: "POST", body: JSON.stringify(body) })
            .then(res => {
                if (res.status === 200) {
                    router.push(`/User/Memo/${id}`)
                }
            })

    }

    return (



        <div className=" mt-5">


            <div
                className="text-primary text-3xl font-bold"
            >

                Unread [{memos.length}]
                <hr
                    className="w-4/12 bg-primary h-2 mt-3"
                >
                </hr>
            </div>


            {memos.length > 0 ? (



                <div
                    className=" mt-5 border-black "
                >

                    {/* <div
                        className="text-primary text-3xl font-bold"
                    >

                        Unread [{memos.length}]
                        <hr
                            className="w-4/12 bg-primary h-2 mt-3"
                        >
                        </hr>
                    </div> */}

                    {memos.map((
                        memo: {
                            _id: String|any,
                            user: string,
                            type: string,
                            title: string,
                            content: string,
                            date: string,
                            sen: string,
                            college: string,
                            department: string,
                            role: string,


                        }
                    ) => (


                        <div 
                        key={memo._id}
                        className="  text-black border-2 border-primary mt-5 mx-2 my-5">



                            <div
                                // href={`/User/Memo/${memo._id}`}
                                onClick={() => Mark(memo._id)}

                            >
                                <div
                                    className="mx-2 grid grid-cols-2  gap-x-5 my-3 cursor-pointer  text-lg"
                                >
                                    <div>
                                        Title:  {memo.title}
                                    </div>


                                    <div
                                        className="text-right "
                                    >
                                        Date:{memo.date}
                                    </div>


                                    <div className="btn btn-primary btn-sm mt-5 text-white"
                                    // onClick={props.clickButton}
                                    >
                                        show more
                                    </div>



                                </div>
                            </div>
                        </div>
                    ))}

                </div>





            ) : (


                <div
                    className=" flex justify-center mt-5 grid-cols-1  "
                >


                    <Image
                        src={Empty_Memo}
                        // width={400}
                        // height={300}
                        className='rounded-sm   flex justify-center'
                    />

                </div>
            )}


        </div>
    )
}

