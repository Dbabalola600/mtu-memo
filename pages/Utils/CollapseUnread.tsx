import { getCookie } from "cookies-next"

import Link from "next/link"
import { useEffect, useState } from "react"



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








export default function CollapseUnread() {

    const [memos, SetMemo] = useState<UnreadMemo[]>([])


    const showinfo = async () => {


        const token = getCookie("NormUser")
        const body = {
            id: token
        }

        const response = await fetch("/api/user/Memo/GetUnread", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as UnreadMemo[]

        SetMemo(response)

    }

    useEffect(() => {
        showinfo()

    }, [])
    return (
        <div className="collapse mt-5">
            <input type="checkbox" className="peer" />


            <div className="collapse-title bg-primaryColour text-white ">
                Unread {memos.length}
            </div>
            <div className="collapse-content bg-black text-white ">
                {memos.length > 0 ? (
                    <div>

                        {memos.map((
                            memo: {
                                _id: String | any,
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
                            <Link
                                href={`/User/Memo/${memo._id}`}
                                key={memo._id}
                            >
                                <div
                                    className="mx-auto grid grid-cols-2  gap-x-5 pt-5 cursor-pointer "
                                >
                                    <div>
                                        Title:  {memo.title}
                                    </div>


                                    <div
                                        className="text-right "
                                    >
                                        Date:{memo.date}
                                    </div>


                                    <div className="btn btn-primary btn-sm mt-5"
                                    // onClick={props.clickButton}
                                    >
                                        show more
                                    </div>



                                </div>
                            </Link>
                        ))}

                    </div>
                ) : (
                    <div>EMPTY </div>
                )}




            </div>
        </div>
    )
}

