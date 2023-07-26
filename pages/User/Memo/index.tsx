import Link from "next/link";
import LoggedLayout from "../../../components/Layouts/LoggedLayout";
import Header from "../../../components/shared/Header";
import MemoBar from "../../../components/navigation/User/MemoBar";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

import CollapseRead from "../../Utils/CollapseRead";
import AllUnread from "../../Utils/AllUnread";
import AllRead from "../../Utils/AllRead";
import SearchBar from "../../Utils/SearchBar";



type ReadMemo = {
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

export default function Index() {

    const [memos, SetMemo] = useState<ReadMemo[]>([])

    const showinfo = async () => {


        const token = getCookie("NormUser")
        const body = {
            id: token
        }

        const response = await fetch("/api/user/Memo/GetRead", { method: "POST", body: JSON.stringify(body) })
            .then(res => res.json()) as ReadMemo[]

        SetMemo(response)

    }

    useEffect(() => {
        showinfo()

    }, [])







    return (
        <LoggedLayout>
            <>


                <div className="grid grid-cols-2 space-x-10 pt-10">

                    <div
                        className=" ">
                        <div
                            className="text-center text-primaryColour font-bold mx-auto md:text-7xl text-5xl">
                            All  Memos
                        </div>
                    </div>


                    <div className='mx-auto'>
                        <Link
                            href="/User/Memo/CreateMemo/">
                            <button className="btn btn-lg btn-primary btn-block text-white md:text-5xl  ">
                                New Memo
                            </button>
                        </Link>
                    </div>


                </div>
                
                <div
                    className="w-full mt-10"
                >
                    {/* <SearchBar /> */}
                </div>

                <div
                    className="mt-1"
                >

                    <MemoBar

                        allLink={"/"}
                    />
                </div>

                <AllUnread />

                <AllRead />







            </>

        </LoggedLayout>
    )
}