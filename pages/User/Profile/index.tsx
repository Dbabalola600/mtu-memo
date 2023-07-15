import { useEffect, useState } from "react";
import LoggedLayout from "../../../components/Layouts/LoggedLayout";
import Header from "../../../components/shared/Header";
import { getCookie } from "cookies-next";
import NavButton from "../../../components/navigation/NavButton";






type User = {
    _id: string,
    firstname: string,
    lastname: string,
    UserId: string,
    College: string,
    Department: string,
    role: string,
}






export default function Profile() {


    const [user, setUser] = useState<User | null>(null)



    const showinfo = async () => {


        const token = getCookie("NormUser")
        const body = {
            _id: token
        }

        const response = await fetch("/api/user/fetchUser", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as User
        setUser(response)

    }

    useEffect(() => {
        showinfo()

    }, [])
    return (
        <LoggedLayout>
            <>

                <Header
                    title="Profile Info"
                />



                <div
                    className="text-black text-3xl font-bold space-y-10"
                >
                    <div>
                        Name: {user?.firstname} {user?.lastname}
                    </div>

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
                        Role: {user?.role}
                    </div>


                    <NavButton
                        title="Update Password"
                        uLink="/User/Profile/UpdatePassword/"
                    />



                </div>

            </>
        </LoggedLayout>
    )
}