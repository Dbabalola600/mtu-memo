import { useRouter } from "next/router"
import AdminLayout from "../../../components/Layouts/admin/AdminLayout"
import { useEffect, useState } from "react"
import Header from "../../../components/shared/Header"
import NavButton from "../../../components/navigation/NavButton"





type User = {
    _id: string,
    firstname: string,
    lastname: string,
    AdminId: string,
    email: string
    role: string,
}


export default function AdminFind() {
    const router = useRouter()

    const [user, setUser] = useState<User | null>(null)
    const showinfo = async () => {


        let ssd = router.query
        const body = {
            _id: ssd._id
        }

        const response = await fetch("/api/admin/fetchAdmin", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as User






        setUser(response)


    }

    useEffect(() => {
        showinfo()

    }, [])


    const del = async (_id: any) => {

        console.log(_id)


        const body ={
            user: _id
        }
        const response = await fetch("/api/admin/yeetAdmin", { method: "POST", body: JSON.stringify(body) })
            .then(res => {
                if (res.status === 200) {
                    router.push("/Admin/admin")
                }
            })



    }




    return (
        <AdminLayout>
            <>

                <Header
                    title={`${user?.firstname}  ${user?.lastname}`}
                />

                <div
                    className="text-3xl space-y-5 text-black"
                >
                    <div>
                        UserId: {user?.AdminId}
                    </div>

                    <div>
                        email: {user?.email}
                    </div>
                    <div>
                        Role: {user?.role}
                    </div>



                </div>






                <div className="grid grid-cols-2 space-x-10 pt-10">

                    <div className=''>
                        <NavButton
                            title="Edit"
                            uLink={`/Admin/admin/Edit/${user?._id}`}
                        />

                    </div>



                    <div className=''>

                        <button
                            onClick={() => del(user?._id)}
                            className="btn btn-lg bg-red-500 btn-block text-white md:text-3xl  ">
                            DELETE
                        </button>

                    </div>


                </div>

            </>
        </AdminLayout>
    )


}