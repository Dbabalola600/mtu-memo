import { useEffect, useState } from "react";
import LoggedLayout from "../../components/Layouts/LoggedLayout";
import Header from "../../components/shared/Header";
import UserDash2 from "../../components/shared/UserDash";
import { getCookie } from "cookies-next";
import MemoBar from "../../components/navigation/User/MemoBar";
import AllUnread from "./Utils/AllUnread";




type User = {
    _id: string,
    firstname: string,
    lastname: string,
    UserId: string,
    College: string,
    Department: string,
    role: string,
}

export default function DashBoard() {
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
                    title="DashBoard"
                />

                <UserDash2
                    AccId={user?.UserId}
                    name={`${user?.firstname}  ${user?.lastname}`}
                    College={user?.College}
                    Deparmtent={user?.Department}
                />


                <Header
                    title="Memos"
                />
                <div
                    className=""
                // className="grid grid-flow-col overflow-x-scroll mt-10 p-5   gap-5  "
                >
                    <MemoBar

                        allLink={"/"}
                    />

                    <AllUnread/>

                </div>

            </>

        </LoggedLayout>
    )
}