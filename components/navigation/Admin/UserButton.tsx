import Link from "next/link"

type UserProps = {

    name: string
    role: string
    department: string
    UserId: string
    ulink?: any
}


export default function UserButton(props: UserProps) {
    return (




        <div>

            <Link
                href={props.ulink}
            >

                <div className="bg-primary rounded-lg  p-3 hover:bg-primary/80">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 mt-0 gap-6 "
                    >
                        <div className=" grid grid-cols-2 lg:grid-cols-1 rounded-lg   text-sm lg:text-lg   ">



                            <div className="flex items-end space-x-3">

                                <div className="w-1/2  relative">


                                    <div className="text-white font-bold  ">
                                        {props.name}
                                    </div>

                                    <p
                                        className="text-gray-400"
                                    >
                                        {props.UserId}
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div
                            className=" grid grid-cols-2 lg:grid-cols-1 rounded-lg    text-sm lg:text-lg "
                        >
                            <div className="flex items-end space-x-3">

                                <div className="w-1/2  relative">


                                    <div className="text-white   font-bold ">
                                        {props.department}
                                    </div>

                                    <p
                                        className="text-gray-400"
                                    >
                                        {props.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </Link>

        </div>




    )
}