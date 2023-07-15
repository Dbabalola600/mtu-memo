import { FormEventHandler, useEffect, useState } from "react";
import AdminLayout from "../../../components/Layouts/admin/AdminLayout";
import TextInput from "../../../components/inputs/TextInput";
import Header from "../../../components/shared/Header";
import { useRouter } from "next/router";
import ErrMess from "../../../components/shared/notify/ErrMess";
import GoodMess from "../../../components/shared/notify/GoodMess";






export default function CreateUser() {

    const Department = [
        "None",
        "Accounting",
        "Biochemistry",
        "Biological Sciences",
        "Business Administration",
        "Chemistry",
        "Computer Science",
        "Economics",
        "English",
        "Industrial Relations and Personnel Management",
        "Mass Communication",
        "Mathematics",
        "Microbiology",
        "Physics",
        "Political Science",
        "Sociology",
        "Religious Studies"
    ]

    const College = [
        "None",
        "CBAS",
        "CHMS"
    ]

    const Role = [
        "None",
        "Lecturer",
        "Secretary",
        "VC",
        "DSA",
        "Dean CBAS",
        "Dean CHMS",
        "HOD Accounting",
        "HOD Biochemistry",
        "HOD Biological Sciences",
        "HOD Business Administration",
        "HOD Chemistry",
        "HOD Computer Science",
        "HOD Economics",
        "HOD English",
        "HOD Industrial Relations and Personnel Management",
        "HOD Mass Communication",
        "HOD Mathematics",
        "HOD Microbiology",
        "HOD Physics",
        "HOD Political Science",
        "HOD Sociology",
        "HOD Religious Studies"
    ]

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
            UserId: form.item(2).value,
            email: form.item(3).value,
            Department: form.item(4).value,
            College: form.item(5).value,
            role: form.item(6).value,
            password: form.item(7).value
        }



        const response = await fetch("/api/admin/user/CreateUser", { method: "POST", body: JSON.stringify(body), headers: { role: "student" } })
            .then(res => {

                if (res.status === 200) {
                    router.push("/Admin/User")
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
                        title="Staff Account Creation"
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

                                placeholder="UserId"

                                type="text"
                                name="UserId"
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


                        <div className="col-span-12  md:col-span-6 ">

                            <label>
                                <span className="label-text text-black text-base">Department</span>

                            </label>
                            <select className="select select-primary w-full ">


                                {Department.map((depart, index) => (
                                    <option
                                        key={index}
                                    >
                                        {depart}
                                    </option>
                                ))}



                            </select>


                        </div>



                        <div className="col-span-12  md:col-span-6 ">

                            <label>
                                <span className="label-text text-black text-base">College</span>

                            </label>
                            <select className="select select-primary w-full ">


                                {College.map((coll, index) => (
                                    <option
                                        key={index}
                                    >
                                        {coll}
                                    </option>
                                ))}
                            </select>


                        </div>

                        <div className="col-span-12  md:col-span-6 ">

                            <label>
                                <span className="label-text text-black text-base">Role</span>

                            </label>
                            <select className="select select-primary w-full ">


                                {Role.map((role, index) => (
                                    <option
                                        key={index}
                                    >
                                        {role}
                                    </option>
                                ))}



                            </select>


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