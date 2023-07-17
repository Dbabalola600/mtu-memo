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
    Memo: {
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
    User: {
        _id: string,
        firstname: string,
        lastname: string,
        UserId: string,
        College: string,
        Department: string,
        role: string,
    }


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


    if (memo?.Memo.type === "Raw") {
        return (
            <LoggedLayout>
                <>

                    <RAW
                        role={memo.Memo.role}
                        title={memo.Memo.title}
                        department={memo.Memo.department}
                        sender={memo.Memo.sen}
                        date={memo.Memo.date}
                        content={memo.Memo.content}
                        college={memo.Memo.college}
                        UserId={token}
                        senderId={memo.Memo.user}
                        memId={memo.Memo._id}
                        UserDepartment={memo.User.Department}
                        UserRole={memo.User.role}
                    />



                </>
            </LoggedLayout>
        )
    } else {
        return (
            <LoggedLayout>
                <>
                    <Pdf
                        base64String={memo?.Memo.content}
                        title={memo?.Memo.title}
                        role={memo?.Memo.role}
                        college={memo?.Memo.college}
                        department={memo?.Memo.department}
                        date={memo?.Memo.date}
                        sender={memo?.Memo.sen}

                    />


                </>
            </LoggedLayout>
        )
    }

}