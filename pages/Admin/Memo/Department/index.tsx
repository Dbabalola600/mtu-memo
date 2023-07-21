import { useEffect, useState } from "react";
import AdminLayout from "../../../../components/Layouts/admin/AdminLayout";
import Header from "../../../../components/shared/Header";
import AdminMemoBar from "../../../../components/navigation/Admin/MemoBar";
import { useRouter } from "next/router";
import AllDepartment from "../../../Utils/Department/AllDepartment";
import Link from "next/link";




type Departments = string

export default function Department() {

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
                    title="Deparmental Memos"
                />


                <div
                    className="grid grid-flow-col overflow-x-scroll mt- p-5   gap-5  "
                >




                    <div
                        className="btn btn-primary text-white text-center hover:bg-green-500"
                        onClick={() => router.push("/Admin/Memo/Department")}
                    >

                        All {"   "}
                    </div>
                    {department.map((
                        depart
                    ) => (
                        <div>
                           <Link
                                href={`/Admin/Memo/Department/${depart}`}

                            >
                                <div
                                    className="btn btn-primary text-white  w-full text-center hover:bg-green-500"

                                >

                                    {depart}
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>


                <AllDepartment/>


            </>
        </AdminLayout>
    )

}