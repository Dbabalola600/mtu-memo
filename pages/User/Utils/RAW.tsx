import { memo } from "react"



type MyProps = {
    title: string
    role: string
    department: string
    sender: string
    date: string
    content: string
}



export default function Raw(props: MyProps) {
    return (

        <div
            className="border-2 border-black min-h-screen"
        >

            <div
                className="text-center text-black text-2xl mt-2"
            >
                MOUNTAIN TOP UNIVERSITY

                {props.role === "None" ? (
                    <div>

                        Department of {props.department}
                    </div>
                ) : (


                    <div>
                        <div>
                            OFFICE OF {props.role}
                        </div>
                    </div>

                )}


                <div>
                    Internal Memo
                </div>

                <div>
                    school logo
                </div>
            </div>

            <div
                className="text-black text-2xl  divide-x-[3px] divide-black grid grid-cols-2 mx-3 border-2 border-black mt-5 px-2 "
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
                    To:  [ import reciever]


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

        </div>

    )
}