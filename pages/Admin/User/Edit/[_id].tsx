import { useEffect, useState } from "react"
import AdminLayout from "../../../../components/Layouts/admin/AdminLayout"
import TextInputAlt from "../../../../components/inputs/TextInputAlt"
import Header from "../../../../components/shared/Header"
import { useRouter } from "next/router"





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





export default function EditUser() {
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
                                explacholder={user?.UserId}
                                type="text"
                                name="User Id: "
                                id="User Id"
                            />
                        </div>

                        {/* department */}
                        <div className="col-span-12  md:col-span-6 ">

                            <label>
                                <span className="label-text text-black text-base">Department:{user?.Department}</span>

                            </label>
                            <select className="select select-primary w-full ">
                            <option disabled selected>{user?.Department}</option>
                              

                                {Department.map((depart, index) => (
                                    <option
                                        key={index}
                                    >
                                        {depart}
                                    </option>
                                ))}



                            </select>


                        </div>
                        {/* college */}
                        <div className="col-span-12  md:col-span-6 ">

                            <label>
                                <span className="label-text text-black text-base">College: {user?.College}</span>

                            </label>
                            <select className="select select-primary w-full ">
                            <option disabled selected>{user?.College}</option>
                              

                                {College.map((coll, index) => (
                                    <option
                                        key={index}
                                    >
                                        {coll}
                                    </option>
                                ))}
                            </select>


                        </div>


                        {/* role */}
                        <div className="col-span-12  md:col-span-6 ">

                            <label>
                                <span className="label-text text-black text-base">Role: {user?.role}</span>

                            </label>
                            <select className="select select-primary w-full ">
                                <option disabled selected>{user?.role}</option>
                                {Role.map((role, index) => (
                                    <option
                                        key={index}
                                    >
                                        {role}
                                    </option>
                                ))}



                            </select>


                        </div>

                    </div>







                    <div className=" w-full  space-y-6">

                        <button className="w-full btn-primary btn "
                            type="submit"
                        // onClick={() => runall()}

                        >
                            {/* {isLoading ? "Loading..." : "UPDATE"} */}

                        </button>

                    </div>

                </form>

            </div>
        </AdminLayout>
    )

}