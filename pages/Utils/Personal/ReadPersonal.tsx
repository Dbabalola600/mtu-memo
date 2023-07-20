import { getCookie } from "cookies-next"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image";
import Empty_Memo from "../../../public/Empty_Memo.svg"

type ReadMemo = {
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








export default function ReadPersonal() {
    const [user, setUser] = useState<User | null>(null)
    const [memos, SetMemo] = useState<ReadMemo[]>([])



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
            name: response?.role
        }

        const response2 = await fetch("/api/user/Memo/Personal/GetReadPersonal", { method: "POST", body: JSON.stringify(body2) })
            .then(res => res.json()) as ReadMemo[]

        SetMemo(response2)

    }

   



    


    useEffect(() => {
        getInfo()

    }, [])



    return (



        <div className=" mt-5">


            <div
                className="text-primary text-3xl font-bold"
            >

                Read [{memos.length}]
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


                            <Link
                                href={`/User/Memo/${memo._id}`}

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
                            </Link>
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

