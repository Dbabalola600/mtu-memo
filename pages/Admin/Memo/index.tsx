import { useEffect, useState } from "react";
import AdminLayout from "../../../components/Layouts/admin/AdminLayout";
import Header from "../../../components/shared/Header";
import useSWR from "swr";
import ALL from "../../Utils/AllMemo";
import { useRouter } from "next/router";
import AdminSearchBar from "../../Utils/Search/AdminSearchBar";


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

type Departments = string


export default function Memo() {
    const [memos, SetMemo] = useState<Memo[]>([])


    const [department, SetDepartment] = useState<Departments[]>([])
    const router = useRouter()

    const getInfo = async () => {
        const response = await fetch("/api/admin/memo/Departmental/GetDepartments", { method: "GET" })
            .then(res => res.json()) as Departments[]
        SetDepartment(response)


    }

    useEffect(() => {
        getInfo()

    }, [])




    return (
        <AdminLayout>
            <>
                <Header
                    title="All Memos"
                />




                <div
                    className="w-full mt-10"
                >
                  <AdminSearchBar/>
                </div>


                <div
                    className="grid grid-flow-col overflow-x-scroll mt- p-5   gap-5  "
                >




                    <div
                        className="btn btn-primary text-white text-center hover:bg-green-500"
                        onClick={() => router.push("/Admin/Memo/")}
                    >

                        All {"   "}
                    </div>

                    <div>
                        <div
                            className="btn btn-primary text-white  w-full text-center hover:bg-green-500"
                            onClick={() => router.push('/Admin/Memo/Department')}
                        >

                            {"Department"}
                        </div>

                    </div>



                    <div>
                        <div
                            className="btn btn-primary text-white  w-full text-center hover:bg-green-500"
                            onClick={() => router.push('/Admin/Memo/College')}
                        >

                            {"College"}
                        </div>

                    </div>



                </div>


                <div>
                    <ALL />
                </div>



            </>
        </AdminLayout>
    )
}