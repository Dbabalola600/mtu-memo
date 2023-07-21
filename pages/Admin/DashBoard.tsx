import { useEffect, useState } from "react";
import AdminLayout from "../../components/Layouts/admin/AdminLayout";
import NavButton from "../../components/navigation/NavButton";
import Header from "../../components/shared/Header";
import { getCookie } from "cookies-next";
import UserDash2 from "../../components/shared/UserDash";
import UserDash from "../../components/shared/UserDash";



type User = {
  _id: string,
  firstname: string,
  lastname: string,
  AdminId: string,

  role: string,
}

export default function DashBoard() {

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
          title="Admin Dashboard"
        />



        <UserDash
          AccId={user?.AdminId}
          name={`${user?.firstname}  ${user?.lastname}`}
          College="ICT"
          Deparmtent={"ICT"}
          Role={user?.role}
        />

        <div
          className="mt-10 space-y-10"
        >

          <NavButton
            title="Users"
            uLink="/Admin/User/"
          />

          <NavButton
            title='Admins'
            uLink="/Admin/admin/"
          />
          <NavButton
            title='Memos'
            uLink="/Admin/Memo/"
          />
        </div>

      </>

    </AdminLayout>
  )
}