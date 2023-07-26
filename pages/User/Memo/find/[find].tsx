import { useRouter } from "next/router"
import LoggedLayout from "../../../../components/Layouts/LoggedLayout"
import { useEffect, useState } from "react"
import { getCookie } from "cookies-next"



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

    const token = getCookie("NormUser")

    const showinfo = async () => {
        const body = {
            id: token,
            find: ssd.find
        }


        const response = await fetch("/api/user/Memo/SearchMemo", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as Memo[]


        SetMemo(response)

    }

    useEffect(() => {
        showinfo()
    }, []
    )


    return (
        <LoggedLayout>
            <>





            </>
        </LoggedLayout>


    )
}