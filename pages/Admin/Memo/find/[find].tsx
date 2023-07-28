import { getCookie } from "cookies-next";
import AdminLayout from "../../../../components/Layouts/admin/AdminLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../../../components/shared/Header";


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




export default function Found() {

    const [memos, SetMemo] = useState<Memo[]>([])
    const router = useRouter()
    let ssd = router.query


    const showinfo = async () => {
        const body = {
            find: ssd.find
        }

        const response = await fetch("/api/admin/memo/SearchMemo", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as Memo[]


        SetMemo(response)

    }

    useEffect(() => {
        showinfo()
    }, []
    )


    return (
        <AdminLayout>
            <>

                <Header
                    title={`Result for ${ssd.find}`}

                />
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


            </>
        </AdminLayout>
    )
}