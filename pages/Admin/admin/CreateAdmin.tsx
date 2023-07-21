import { FormEventHandler, useEffect, useState } from "react";
import AdminLayout from "../../../components/Layouts/admin/AdminLayout";
import TextInput from "../../../components/inputs/TextInput";
import Header from "../../../components/shared/Header";
import { useRouter } from "next/router";
import ErrMess from "../../../components/shared/notify/ErrMess";
import GoodMess from "../../../components/shared/notify/GoodMess";






export default function CreateUser() {

    

    const [isLoading, setLoading] = useState(false)
    const [showtoast, settoast] = useState({ message: "", show: false })
    const [showtoast2, settoast2] = useState({ message: "", show: false })
    const router = useRouter()


    useEffect(() => {
        if (showtoast.show) {
            setTimeout(() => {
                settoast({ message: "", show: false })
            }, 5000)
        }

    }, [showtoast.show])
    useEffect(() => {
        if (showtoast2.show) {
            setTimeout(() => {
                settoast2({ message: "", show: false })
            }, 5000)
        }

    }, [showtoast2.show])


    const newadd: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formElements = e.currentTarget.elements as typeof e.currentTarget.elements & {
            firstname: HTMLInputElement
        }
        const form = e.currentTarget.elements as any

        const body = {
            firstname: form.item(0).value,
            lastname: form.item(1).value,
            AdminId: form.item(2).value,
            email: form.item(3).value,
            password: form.item(4).value
        }



        const response = await fetch("/api/admin/createAdmin", { method: "POST", body: JSON.stringify(body), headers: { role: "student" } })
            .then(res => {

                if (res.status === 200) {
                    router.push("/Admin/admin/")
                }
                if (res.status === 256) {
                    settoast2({ message: "", show: true })
                }
                else {
                    settoast({ message: " message", show: true })
                }

            }).catch(err => {
                console.log(err)
            })

        setLoading(false)

    }

    return (
        <AdminLayout>
            <>



                <form
                    autoSave={"off"}
                    onSubmit={
                        newadd
                    }
                    autoComplete={"off"}
                    className="w-full py-0 space-y-16  text-black text-base md:text-xl"
                >

                    <Header
                        title="Admin Account Creation"
                        desc="please provide necessary details to create a staff account" />

                    <div className="grid grid-cols-12 gap-x-0 md:gap-x-10 gap-y-12 md:gap-y-28">

                        {/* first name */}
                        <div className="col-span-12  md:col-span-6 ">
                            <TextInput

                                placeholder="First Name"

                                type="text"
                                name="firstname"
                                id="firstname"
                            />
                        </div>

                        {/* lastname */}
                        <div className="col-span-12  md:col-span-6 ">
                            <TextInput

                                placeholder="Last Name"

                                type="text"
                                name="lastname"
                                id="lastname"
                            />
                        </div>


                        {/* UserId */}
                        <div className="col-span-12  md:col-span-6 ">
                            <TextInput

                                placeholder="AdminId"

                                type="text"
                                name="AdminId"
                                id="lastname"
                            />
                        </div>


                        {/* email */}
                        <div className="col-span-12  md:col-span-6 ">
                            <TextInput

                                placeholder="Email"

                                type="email"
                                name="Email"

                            />
                        </div>


                       


                        {/* password */}
                        <div className="col-span-12  md:col-span-6 ">
                            <TextInput

                                placeholder="Password"

                                type="password"
                                name="Password"


                            />
                        </div>

                    </div>





                    {showtoast.show && <GoodMess title="Sucess" />}
                    {/* {showtoast2.show && <ErrMess title="Already exits, please login" />} */}



                    <div className=" w-full  space-y-6">

                        <button className="w-full btn-primary btn "
                            type="submit">
                            {isLoading ? "Loading..." : "Create"}

                        </button>

                    </div>

                </form>



            </>
        </AdminLayout>
    )
}