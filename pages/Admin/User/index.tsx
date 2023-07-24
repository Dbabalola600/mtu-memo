import Link from "next/link";
import AdminLayout from "../../../components/Layouts/admin/AdminLayout";
import Header from "../../../components/shared/Header";
import { useEffect, useState } from "react";
import UserButton from "../../../components/navigation/Admin/UserButton";


type User = {
    _id: string,
    firstname: string,
    lastname: string,
    UserId: string,
    College: string,
    Department: string,
    Email: string
    role: string,
}


export default function Index() {
    const [users, setUser] = useState<User[]>([])


    const showinfo = async () => {

        const response = await fetch("/api/admin/user/FetchAll")
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
                    title="Users"
                />



                <div className="grid grid-cols-2 space-x-10 pt-10">

                    <div
                        className=" ">
                        <div
                            className="text-center text-primaryColour font-bold mx-auto md:text-7xl text-5xl">
                            Users
                        </div>
                    </div>


                    <div className='mx-auto'>
                        <Link
                            href="/Admin/User/CreateUser">
                            <button className="btn btn-lg btn-primary btn-block text-white md:text-5xl  ">
                                New User
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
                        UserId: string,
                        College: string,
                        Department: string,
                        Email: string
                        role: string,
                    }) =>
                        <div
                            key={user._id}
                        >
                            <UserButton
                                UserId={user.UserId}
                                department={user.Department}
                                name={`${user?.firstname}  ${user?.lastname}`}
                                role={user.role}
                                ulink={`/Admin/User/${user._id}`}
                            />
                        </div>
                    )}

                </div>



            </>
        </AdminLayout>
    )

}