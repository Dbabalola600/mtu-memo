import Link from "next/link";
import AdminLayout from "../../../../components/Layouts/admin/AdminLayout";
import Header from "../../../../components/shared/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AllColleges from "../../../Utils/College/AllCollege";





type Colleges = string


export default function College(){
    const router = useRouter()
    const [college, SetCollege] = useState<Colleges[]>([])



    const getInfo = async () => {
        const response = await fetch("/api/admin/memo/College/GetColleges", { method: "GET" })
            .then(res => res.json()) as Colleges[]
        SetCollege(response)


    }

    useEffect(() => {
        getInfo()

    }, [])



    return (
        <AdminLayout>
            <>
                <Header
                    title="College Memos"
                />


                <div
                    className="grid grid-flow-col overflow-x-scroll mt- p-5   gap-5  "
                >




                    <div
                        className="btn btn-primary text-white text-center hover:bg-green-500"
                        onClick={() => router.push("/Admin/Memo/College")}
                    >

                        All {"   "}
                    </div>
                    {college.map((
                        depart, index
                    ) => (
                        <div
                        key={index}
                        >
                           <Link
                                href={`/Admin/Memo/College/${depart}`}

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


                <AllColleges/>


            </>
        </AdminLayout>
    )


}