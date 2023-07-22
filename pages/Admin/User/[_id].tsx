import { getCookie } from "cookies-next";
import AdminLayout from "../../../components/Layouts/admin/AdminLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserDash2 from "../../../components/shared/UserDash";
import Link from "next/link";
import NavButton from "../../../components/navigation/NavButton";
import Header from "../../../components/shared/Header";



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





export default function UserIndi() {
    const router = useRouter()

    const [user, setUser] = useState<User | null>(null)
    const showinfo = async () => {


        let ssd = router.query
        const body = {
            _id: ssd._id
        }

        const response = await fetch("/api/user/fetchUser", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as User






        setUser(response)


    }

    useEffect(() => {
        showinfo()

    }, [])
    return (
        <AdminLayout>
            <div>


                <Header
                    title={`${user?.firstname}  ${user?.lastname}`}
                />
                <div
                    className="text-3xl space-y-5 text-black"
                >
                    <div>
                        UserId: {user?.UserId}
                    </div>
                    <div>
                        College: {user?.College}

                    </div>
                    <div>
                        Department: {user?.Department}
                    </div>
                    <div>
                        email: {user?.Email}
                    </div>
                    <div>
                        Role: {user?.role}
                    </div>



                </div>






                <div className="grid grid-cols-2 space-x-10 pt-10">

                    <div className=''>
                        <NavButton
                            title="Edit"
                            uLink={`/Admin/User/Edit/${user?._id}`}
                        />

                    </div>



                    <div className=''>

                        <button className="btn btn-lg bg-red-500 btn-block text-white md:text-3xl  text-5xl  ">
                            DELETE
                        </button>

                    </div>


                </div>
            </div>
        </AdminLayout>
    )
}