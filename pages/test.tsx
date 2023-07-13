import Link from "next/link";
import UserButton from "../components/navigation/Admin/UserButton";
import CusCollapse from "../components/shared/CusCollapse";
import UserDash2 from "../components/shared/UserDash";





export default function test() {


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
    return (
        <div>



            <UserButton
                name="person"
                UserId="userid"
                ulink="/"
                department="department"
                role="role"
            />

            <CusCollapse


                info="1"
                title="2"
            />





            <div className="collapse mt-5">
                <input type="checkbox" className="peer" />


                <div className="collapse-title bg-primaryColour text-white ">
                    title
                </div>
                <div className="collapse-content bg-primaryColour text-white ">

                    {Department.map((depart, index) => (
                        <Link
                        key={index}
                            href="/"
                        >
                            <div
                                className="mx-auto grid grid-cols-2 pt-5"
                            >
                                <div>{depart}</div>


                                <div className="btn btn-primary btn-sm "
                                // onClick={props.clickButton}
                                >
                                    show more
                                </div>



                            </div>
                        </Link>
                    ))}




                </div>
            </div>
        </div>
    )
}