import { useState } from "react";
import AdminLayout from "../../../components/Layouts/admin/AdminLayout";
import Header from "../../../components/shared/Header";
import useSWR from "swr";
import ALL from "../../Utils/AllMemo";


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


export default function Memo() {
    const [memos, SetMemo] = useState<Memo[]>([])

    return (
        <AdminLayout>
            <>
                <Header
                    title="All Memos"
                />
                <div>
                    <ALL />
                </div>



            </>
        </AdminLayout>
    )
}