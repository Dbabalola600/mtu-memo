import { getCookie } from "cookies-next";
import LoggedLayout from "../../../components/Layouts/LoggedLayout";
import Header from "../../../components/shared/Header";
import TextInput from "../../../components/inputs/TextInput";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import ErrMess from "../../../components/shared/notify/ErrMess";





export default function UpdatePassword() {
    const token = getCookie("NormUser")
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()
    const [showtoast, settoast] = useState({ message: "", show: false })




    const update: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)


        const form = e.currentTarget.elements as any





        const body = {
            id: token,
            o_pass: form.item(0).value,
            n_pass: form.item(1).value
        }

        const response = await fetch("/api/user/Profile/updateEmail", { method: "POST", body: JSON.stringify(body) })
            .then(res => {
                if (res.status == 200) {
                    router.push("/User/Profile/")
                } if (res.status === 401) {
                    settoast({ message: " message", show: true })

                }
            }).catch(err => {
                console.log(err)
            })






        setLoading(false)
    }





    return (
        <LoggedLayout>
            <>

                <Header
                    title="Update Email"
                />
                <form
                    onSubmit={update}
                    className="w-full py-20 space-y-12  text-black text-base md:text-xl"
                >


                    {showtoast.show && <ErrMess title="invalid  password" />}

                    <div className="mx-auto  w-full ">
                        <TextInput
                            placeholder="Enter Email"
                            name="Current Email"
                            type='email'

                        />
                    </div>

                    <div className="mx-auto  w-full ">
                        <TextInput
                            placeholder="Enter Emial"
                            name="New Email"
                            type='email'

                        />
                    </div>


                    <div className=" w-full  space-y-6">

                        <button className="w-full btn-primary btn "
                            type="submit">
                            {isLoading ? "Loading..." : "Proceed"}

                        </button>



                    </div>

                </form>

            </>
        </LoggedLayout>
    )
}