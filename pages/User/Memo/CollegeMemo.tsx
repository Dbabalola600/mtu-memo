import Link from "next/link";
import LoggedLayout from "../../../components/Layouts/LoggedLayout";
import Header from "../../../components/shared/Header";
import MemoBar from "../../../components/navigation/User/MemoBar";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import ReadCollege from "../../Utils/College/ReadCollege";
import UnreadCollege from "../../Utils/College/UnreadCollege";



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

export default function CollegeMemo() {









    return (
        <LoggedLayout>
            <>


                <div className="grid grid-cols-2 space-x-10 pt-10">

                    <div
                        className=" ">
                        <div
                            className="text-center text-primaryColour font-bold mx-auto md:text-7xl text-5xl">
                            College  Memo
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
                    className="mt-10"
                >

                    <MemoBar

                        allLink={"/"}
                    />
                </div>

                <UnreadCollege />
                <ReadCollege />




            </>

        </LoggedLayout>
    )
}