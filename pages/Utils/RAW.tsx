import { memo } from "react"
import NavButton from "../../components/navigation/NavButton"



type MyProps = {
    title: string
    role: string
    department: string
    sender: string
    date: string
    content: string
    college: string
    UserId: string | any
    senderId: any
}



export default function Raw(props: MyProps) {
    return (
        <>
            {props.UserId === props.senderId ? (

                <div
                    // className="grid grid-cols-2 space-x-2 mt-5"
                >
                    <NavButton
                        title="Edit"
                        uLink="/User/Memo"
                    />


                    {/* <div className="btn btn-lg bg-red-500 text-white btn-block  mb-5 text-center ">

                        Delete
                    </div> */}

                </div>

            ) : (
                <div>

                </div>
            )}

            <div
                className="border-2 border-black min-h-screen"
            >

                <div
                    className="text-center text-black lg:text-2xl text-xl mt-2"
                >
                    MOUNTAIN TOP UNIVERSITY
                    <div>

                        Department of {props.department}
                    </div>



                    <div>
                        Internal Memo
                    </div>

                    <div
                        className=" flex justify-center mt-3"
                    >
                        <img
                            className=" lg:h-15 h-12 w-auto "
                            src="/mtulogo.png"
                            alt="Your Company"
                        />
                    </div>
                </div>

                <div
                    className="text-black lg:text-2xl text-lg  divide-x-[3px] divide-black grid grid-cols-2 mx-3 border-2 border-black mt-5 px-2 "
                >
                    <div
                        className=""
                    >
                        From: {props.sender}

                        {/* <div
                        className="mt-14"
                    >
                        ref
                    </div> */}
                    </div>

                    <div
                        className="text-right"


                    >


                        {props.department === "None" && props.role !== "None" ? (
                            <div>
                                <div>
                                    <div>
                                        To:  {props.role}
                                    </div>
                                </div>
                            </div>
                        ) : props.role === "None" && props.department !== "None" ? (
                            <div>
                                <div>
                                    To: Deparment of {props.department}


                                </div>


                            </div>
                        ) : (
                            <div>
                                To: {props.college}
                            </div>
                        )}




                        <div
                            className="mt-14"
                        >
                            Date : {props.date}
                        </div>
                    </div>



                </div>



                <div
                    className="text-center mt-5 text-2xl text-black "
                >
                    {props.title}
                </div>

                <div
                    className="text-black text-justify mx-3 text-lg whitespace-pre-line"
                >


                    {props.content}
                </div>

            </div >
        </>


    )
}