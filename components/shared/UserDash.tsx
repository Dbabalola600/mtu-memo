

type DashProps = {
    accBal?: string | any;
    name: string | any;
    AccId: string | any;
    Deparmtent: String | any
    College: String | any
    Role: string | any

}



export default function UserDash(props: DashProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-6">

            <div
                className=" grid grid-cols-2 lg:grid-cols-1 rounded-lg   lg:text-3xl  text-lg  ">

                <div className="text-primary lg:text-3xl  text-lg">
                    Welcome {props.name}{"  "}
                </div>

                <div
                    className="text-primary text-right lg:text-left"
                >
                    UserId:  {props.AccId}
                </div>
            </div>




            <div className="bg-primary rounded-lg  p-3">


                {/* <div className="flex items-end space-x-3"> */}

                <div className=" grid grid-cols-2 lg:grid-cols-1">


                    <div className="text-white   font-bold  text-xl">
                        {/* {props.College} */}

                        {props.Deparmtent}
                    </div>

                    <div
                        className="text-gray-400 text-right lg:text-left"
                    >
                        {props.Role}

                    </div>
                </div>
                {/* </div> */}


            </div>

        </div>
    )
}
