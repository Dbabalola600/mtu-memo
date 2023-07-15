import { useRouter } from "next/router";
import AdminLayout from "../../../components/Layouts/admin/AdminLayout";
import { useEffect, useState } from "react";
import Pdf from "../../Utils/PDF";
import { getCookie } from "cookies-next";
import RAW from "../../Utils/RAW";



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


export default function ExactMemo() {
    const router = useRouter()

    const [memo, SetMemo] = useState<Memo | null>(null)


    const token = getCookie("AdminUser")


    const showinfo = async () => {


        let ssd = router.query
        const body = {
            id: ssd._id
        }

        const response = await fetch("/api/admin/memo/GetMemo", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as Memo

        SetMemo(response)

    }

    useEffect(() => {
        showinfo()

    }, [])


    if (memo?.type === "Raw") {
        return (
            <AdminLayout>
                <>

                    <RAW
                        role={memo.role}
                        title={memo.title}
                        department={memo.department}
                        sender={memo.sen}
                        date={memo.date}
                        content={memo.content}
                        college={memo.college}
                        UserId={token}
                        senderId={memo.user}
                    />



                </>
            </AdminLayout>
        )
    } else {
        return (
            <AdminLayout>
                <>
                    <Pdf
                        base64String={memo?.content}
                        title={memo?.title}
                        role={memo?.role}
                        college={memo?.college}
                        department={memo?.department}
                        date={memo?.date}
                        sender={memo?.sen}

                    />


                </>
            </AdminLayout>
        )
    }
}