import { useEffect, useState } from "react"
import AdminLayout from "../../../components/Layouts/admin/AdminLayout"
import NavButton from "../../../components/navigation/NavButton"
import Header from "../../../components/shared/Header"
import { getCookie } from "cookies-next"


type User = {
    _id: string,
    firstname: string,
    lastname: string,
    AdminId: string,

    role: string,
}




export default function Profile() {


    const [user, setUser] = useState<User | null>(null)



    const showinfo = async () => {


        const token = getCookie("AdminUser")
        const body = {
            _id: token
        }

        const response = await fetch("/api/admin/fetchAdmin", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as User






        setUser(response)
    }

    useEffect(() => {
        showinfo()

    }, [])
    return (
        <AdminLayout>
            <>

                <Header
                    title="Profile Info"
                />



                <div
                    className="text-black text-3xl font-bold space-y-5"
                >
                    <div>
                        Name: {user?.firstname} {user?.lastname}
                    </div>

                    <div>
                        UserId: {user?.AdminId}
                    </div>
                    <div
                        className="grid lg:grid-cols-2 "
                    >

                        <div>
                            {/* Email: {user?.email} */}
                        </div>
{/* 
                        <div>
                            <NavButton
                                title="Update Email"
                                uLink="/User/Profile/UpdateEmail/" />
                        </div> */}


                    </div>


                    <div>
                        Role: {user?.role}
                    </div>


                    <NavButton
                        title="Update Password"
                        uLink="/Admin/Profile/UpdatePassword/"
                    />






                </div>

            </>
        </AdminLayout>
    )
}