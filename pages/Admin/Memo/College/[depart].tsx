import { useEffect, useState } from "react";
import AdminLayout from "../../../../components/Layouts/admin/AdminLayout";
import Header from "../../../../components/shared/Header";
import AdminMemoBar from "../../../../components/navigation/Admin/MemoBar";
import { useRouter } from "next/router";
import AllDepartment from "../../../Utils/Department/AllDepartment";
import SpecDepartment from "../../../Utils/Department/SpecDepartment";
import Link from "next/link";
import Image from "next/image"
import Empty_Memo from "../../../../public/Empty_Memo.svg"



type Colleges = string


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

export default function Department() {
    const [college, SetCollege] = useState<Colleges[]>([])
    const router = useRouter()
    const [memos, SetMemo] = useState<Memo[]>([])
    let ssd = router.query



    const getInfo = async () => {


        const response = await fetch("/api/admin/memo/Departmental/GetDepartments", { method: "GET" })
            .then(res => res.json()) as Colleges[]
        SetCollege(response)


    }






    const showinfo = async () => {


        const body = {
            name: ssd.depart
        }



        const response = await fetch("/api/admin/memo/College/GetColleges", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as Memo[]
        SetMemo(response)



    }

    useEffect(() => {
        getInfo()

    }, [])



    useEffect(() => {
        showinfo()

    }, [])







    return (
        <AdminLayout>
            <>
                <Header
                    title={`${ssd.depart} Memos`}
                />


                {/* <div
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

                </div> */}


                <div className=" mt-5">


                    <div
                        className="text-primary text-3xl font-bold"
                    >

                        All [{memos.length}]
                        <hr
                            className="w-4/12 bg-primary h-2 mt-3"
                        >
                        </hr>
                    </div>


                    {memos.length > 0 ? (

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





                    ) : (
                        <div
                            className=" flex justify-center mt-5 grid-cols-1  "
                        >


                            <Image
                                src={Empty_Memo}
                                // width={400}
                                // height={300}
                                className='rounded-sm   flex justify-center'
                            />

                        </div>
                    )}


                </div>


            </>
        </AdminLayout>
    )

}