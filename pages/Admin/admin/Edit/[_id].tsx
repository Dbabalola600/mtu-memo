import { useEffect, useState } from "react";
import AdminLayout from "../../../../components/Layouts/admin/AdminLayout";
import { useRouter } from "next/router";
import Header from "../../../../components/shared/Header";
import TextInputAlt from "../../../../components/inputs/TextInputAlt";



type User = {
    _id: string,
    firstname: string,
    lastname: string,
    AdminId: string,
    email: string
    role: string,
}


export default function EditAdmin() {



    const [isLoading, setLoading] = useState(false)
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

    return (
        <AdminLayout>
            <>
                <Header
                    title={`${user?.firstname}  ${user?.lastname}`}
                    desc="Edit items"
                />


                <form
                    autoSave={"off"}
                    // onSubmit={runAll}


                    autoComplete={"off"}
                    className="w-full py-20 space-y-16  text-black text-base md:text-xl"
                >


                    <div className="grid grid-cols-12 gap-x-0 md:gap-x-10 gap-y-12 md:gap-y-28">

                        {/* fname */}
                        <div className="col-span-12  md:col-span-6 ">
                            <TextInputAlt
                                placeholder="First Name"
                                explacholder={user?.firstname}
                                type="text"
                                name="First Name: "
                                id="First Name"
                            />
                        </div>


                        {/* lname */}
                        <div className="col-span-12  md:col-span-6 ">
                            <TextInputAlt
                                placeholder="Last Name"
                                explacholder={user?.lastname}
                                type="text"
                                name="Last Name: "
                                id="Last Name"
                            />
                        </div>



                        {/* Uid */}
                        <div className="col-span-12  md:col-span-6 ">
                            <TextInputAlt
                                placeholder="User Id"
                                explacholder={user?.AdminId}
                                type="text"
                                name="User Id: "
                                id="User Id"
                            />
                        </div>

                        
                       
                    </div>







                    <div className=" w-full  space-y-6">

                        <button className="w-full btn-primary btn "
                            type="submit"
                        // onClick={() => runall()}

                        >
                            {isLoading ? "Loading..." : "UPDATE"}

                        </button>

                    </div>

                </form>

            </>
        </AdminLayout>
    )


}