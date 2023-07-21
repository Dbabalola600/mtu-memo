import { getCookie } from "cookies-next"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import Empty_Memo from "../../../public/Empty_Memo.svg"
import useSWR from "swr"
import { useRouter } from "next/router"


type Memo = {
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


type MyProps = {
    name: any
}


export default function SpecDepartment(props: MyProps) {
    const router = useRouter()

    let ssd = router.query



    console.log("this" + props.name)

    const [memos, SetMemo] = useState<Memo[]>([])


    const showinfo = async () => {


        const body = {
            name: props.name
        }



        const response = await fetch("/api/admin/memo/Departmental/GetDepartments", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as Memo[]
        SetMemo(response)

    }




    useEffect(() => {
        showinfo()

    }, [])
   


    return (
        <div className=" mt-5">


            <div
                className="text-primary text-3xl font-bold"
            >

                All [{memos.length}]
                <hr
                    className="w-4/12 bg-primary h-2 mt-3"
                >
                </hr>
            </div>


            {memos.length > 0 ? (

                <div
                    className=" mt-5 border-black "
                >

                    {memos?.map((
                        memo: {
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
                    ) => (


                        <div
                            key={memo.user}
                            className="  text-black border-2 border-primary mt-5 mx-2 my-5">


                            <Link
                                href={`/Admin/Memo/${memo._id}`}

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