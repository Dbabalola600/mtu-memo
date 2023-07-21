import { useEffect, useState } from "react";
import AdminLayout from "../../../components/Layouts/admin/AdminLayout";
import Header from "../../../components/shared/Header";
import UserButton from "../../../components/navigation/Admin/UserButton";
import Link from "next/link";



type User = {
    _id: string,
    firstname: string,
    lastname: string,
    AdminId: string,
    email: string
    role: string,
}




export default function AllAdmin() {

    const [users, setUser] = useState<User[]>([])


    const showinfo = async () => {

        const response = await fetch("/api/admin/fetchAllAdmin")
            .then(res => res.json()) as User[]

        setUser(response)
    }



    useEffect(() => {
        showinfo()

    }, [])




    return (
        <AdminLayout>
            <>
                <Header
                    title="All Admins"
                />




                <div className="grid grid-cols-2 space-x-10 pt-10">

                    <div
                        className=" ">
                        <div
                            className="text-center text-primaryColour font-bold mx-auto md:text-7xl text-5xl">
                            Admin
                        </div>
                    </div>


                    <div className='mx-auto'>
                        <Link
                            href="/Admin/admin/CreateAdmin">
                            <button className="btn btn-lg btn-primary btn-block text-white md:text-3xl  text-5xl  ">
                                New Admin
                            </button>
                        </Link>
                    </div>


                </div>

                <div className="grid grid-cols-2 lg:grid-cols-2 mt-10 gap-6"
                >


                    {users.map((user: {
                        _id: string,
                        firstname: string,
                        lastname: string,
                        AdminId: string,
                        email: string
                        role: string,
                    }) =>
                        <div
                            key={user._id}
                        >
                            <UserButton
                                UserId={user.AdminId}
                                department={"ICT"}
                                name={`${user?.firstname}  ${user?.lastname}`}
                                role={user.role}
                                ulink={`/Admin/admin/${user._id}`}
                            />
                        </div>
                    )}

                </div>
            </>
        </AdminLayout>
    )
}