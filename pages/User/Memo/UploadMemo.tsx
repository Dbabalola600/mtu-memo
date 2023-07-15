import { ChangeEvent, FormEventHandler, useState } from "react";
import LoggedLayout from "../../../components/Layouts/LoggedLayout";
import FileInput from "../../../components/inputs/FileInput";
import Header from "../../../components/shared/Header";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import TextInput from "../../../components/inputs/TextInput";




export default function UploadMemo() {
    const [isLoading, setLoading] = useState(false)
    const token = getCookie("NormUser")
    const router = useRouter()
    const [base64String, setBase64String] = useState<string>('');






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

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            try {
                const base64 = await fileToBase64(selectedFile);
                setBase64String(base64);
                console.log(base64);
            } catch (error) {
                console.error('Error converting file to base64:', error);
            }
        }
    };

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result?.toString()?.split(',')[1];
                resolve(base64String || '');
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    };



    const create: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)
        const form = e.currentTarget.elements as any


        const body = {
            user: token,
            type: "PDF",
            title: form.item(0).value,
            content: base64String,
            department: form.item(2).value,
            college: form.item(3).value,
            role: form.item(4).value
        }



        // console.log(base64String)

        const response = await fetch("/api/user/Memo/CreateMemo", { method: "POST", body: JSON.stringify(body) })
            .then(res => {
                if (res.status === 200) {
                    router.push("/User/Memo/")
                }
            })

        setLoading(false)
    }







    return (
        <LoggedLayout>
            <>
                <Header
                    title="Upload Memo"

                />


                <form
                    onSubmit={create}
                    className="w-full py-20 space-y-5  text-black text-base md:text-xl"

                >

                    <div className="mx-auto  w-full ">
                        <TextInput
                            placeholder="Title"
                            name="Title"
                            type='text'

                        />
                    </div>


                    <div className=" w-full">
                        <div className="form-control w-full  mx-auto">
                            <label >
                                <span className="label-text text-black text-2xl">Upload</span>
                                <div
                                    className="text-sm text-gray-500 font-bold"
                                >
                                    only upload pdf documents
                                </div>
                            </label>
                            <input
                                type="file"
                                placeholder="Upload"
                                className="input input-bordered w-full h-48 input-primary"
                                onChange={handleFileChange}
                            />

                        </div>
                    </div>




                    <div
                        className="pt- "
                    >
                        <label>
                            <span className="label-text text-black text-3xl">Department</span>
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
                            <span className="label-text text-black text-3xl">College</span>
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
                            <span className="label-text text-black text-3xl">Role</span>
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
                    <button className="w-full btn-primary btn my-10 "
                        type="submit">
                        {isLoading ? "Loading..." : "SUBMIT"}

                    </button>
                </form>



            </>

        </LoggedLayout>
    )
}