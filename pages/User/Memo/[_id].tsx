import { useRouter } from "next/router";
import LoggedLayout from "../../../components/Layouts/LoggedLayout";
import { useEffect, useState } from "react";
import RAW from "../../Utils/RAW";
import Pdf from "../../Utils/PDF";
import { getCookie } from "cookies-next";


type User = {
    _id: string,
    firstname: string,
    lastname: string,
    UserId: string,
    College: string,
    Department: string,
    role: string,
}


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
    const [user, setUser] = useState<User | null>(null)
    const [memo, SetMemo] = useState<Memo | null>(null)



    const token = getCookie("NormUser")
    const showinfo = async () => {


        let ssd = router.query
        const body = {
            id: ssd._id
        }

        const response = await fetch("/api/user/Memo/GetMemo", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as Memo

        SetMemo(response)

    }

    useEffect(() => {
        showinfo()

    }, [])


    if (memo?.type === "Raw") {
        return (
            <LoggedLayout>
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
            </LoggedLayout>
        )
    } else {
        return (
            <LoggedLayout>
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
            </LoggedLayout>
        )
    }

}