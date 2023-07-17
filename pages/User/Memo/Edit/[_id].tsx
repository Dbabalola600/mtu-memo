import { getCookie } from "cookies-next";
import LoggedLayout from "../../../../components/Layouts/LoggedLayout";
import Header from "../../../../components/shared/Header";
import { useRouter } from "next/router";
import { FormEventHandler, useEffect, useState } from "react";
import TextInput from "../../../../components/inputs/TextInput";
import LargeTextInput from "../../../../components/inputs/LargeTextInput";




type Memo = {
    _id: String,
    user: string,
    type: string,
    title: string,
    content: string,
    date: string,
    sen: string,
    college: string,
    department: string,
    role: string,


}



type User = {
    _id: string,
    firstname: string,
    lastname: string,
    UserId: string,
    College: string,
    Department: string,
    role: string,
}

export default function EditMemo() {
    const router = useRouter()
    const token = getCookie("NormUser")
    const [memo, SetMemo] = useState<Memo | null>(null)

    const [isLoading, setLoading] = useState(false)

    let ssd = router.query
    const showinfo = async () => {



        const body = {
            id: ssd._id
        }

        const response = await fetch("/api/user/Memo/GetMemo", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as Memo

        SetMemo(response)

    }

    useEffect(() => {
        showinfo()

    }, [])





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

    const runAll: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)
        const form = e.currentTarget.elements as any
        const body = {
            id: ssd._id,
            title: form.item(0).value,
            content: form.item(1).value,
            department: form.item(2).value,
            college: form.item(3).value,
            role: form.item(4).value
        }



        //title 
        const Titleresponse = await fetch("/api/user/Memo/Update/UpTitle", { method: "POST", body: JSON.stringify(body) })
            .then(res => {
                if (res.status == 200) {
                    console.log("yuppers")
                }
                if (res.status == 290) {
                    console.log("skipped")
                }
            }).catch(err => {
                console.log(err)
            })



        //content 
        const Contentresponse = await fetch("/api/user/Memo/Update/UpContent", { method: "POST", body: JSON.stringify(body) })
            .then(res => {
                if (res.status == 200) {
                    console.log("yuppers")
             
                }
                if (res.status == 290) {
                    console.log("skipped")
                }
            }).catch(err => {
                console.log(err)
            })


        //college 
        const Collegeresponse = await fetch("/api/user/Memo/Update/UpCollege", { method: "POST", body: JSON.stringify(body) })
            .then(res => {
                if (res.status == 200) {
                    console.log("yuppers")
                }
                if (res.status == 290) {
                    console.log("skipped")
                }
            }).catch(err => {
                console.log(err)
            })


        //department 
        const Departmentresponse = await fetch("/api/user/Memo/Update/UpDepartment", { method: "POST", body: JSON.stringify(body) })
            .then(res => {
                if (res.status == 200) {
                    console.log("yuppers")
                }
                if (res.status == 290) {
                    console.log("skipped")
                }
            }).catch(err => {
                console.log(err)
            })


        //Role 
        const Roleresponse = await fetch("/api/user/Memo/Update/UpRole", { method: "POST", body: JSON.stringify(body) })
            .then(res => {
                if (res.status == 200) {
                    console.log("yuppers")
                    router.push("/User/Memo/")
                }
                if (res.status == 290) {
                    console.log("skipped")
                }
            }).catch(err => {
                console.log(err)
            })



    }



    return (
        <LoggedLayout>
            <>

                <Header
                    title="Edit Memo"
                />





                <form
                    onSubmit={runAll}
                    className="w-full py-20 space-y-12  text-black text-base md:text-xl"
                >
                    <div className="mx-auto  w-full ">

                        <TextInput
                            placeholder={"Enter New Title"}
                            name={`Title: ${memo?.title}`}
                            type='text'

                        />
                    </div>




                    <LargeTextInput
                        title={`content: ${memo?.content}`}
                        placholder="Enter New Content"
                    />






                    <div
                        className="pt-5 "
                    >
                        <label>
                            <span className="label-text text-black text-3xl">Department: {memo?.department} </span>
                            <div
                                className="text-sm text-gray-500 font-bold"
                            >
                                this indicates sending a departmental wide memo
                            </div>

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
                            <span className="label-text text-black text-3xl">College: {memo?.college}</span>
                            <div
                                className="text-sm text-gray-500 font-bold"
                            >
                                this indicates sending a college wide memo
                            </div>
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
                            <span className="label-text text-black text-3xl">Role: {memo?.role}</span>
                            <div
                                className="text-sm text-gray-500 font-bold"
                            >
                                this indicates the specific staff recieving the memo
                            </div>
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


                    <button className="w-full btn-primary btn "
                        type="submit">
                        {isLoading ? "Loading..." : "SUBMIT"}
                        {/* Submit */}
                    </button>


                </form>

            </>
        </LoggedLayout>
    )
}