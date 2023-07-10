


import router from "next/router";



type BarProps = {

    allLink: any
    // drinkLink: any
    // foodLink:any
    // specialLink: any



}






export default function MemoBar(props: BarProps) {
    return (
        <div
            className="grid grid-flow-col overflow-x-scroll mt- p-5   gap-5  "   
        >




            <div
                className="btn btn-primary text-white text-center hover:bg-black"
                onClick={() => router.push("/User/Memo/")}
            >

                All {"   "}  
            </div>


            <div
                className="btn btn-primary text-white text-center hover:bg-black"
                onClick={() => router.push("/User/Memo/DepartmentMemo")}
            >

                Department {"   "}  
            </div>

            <div
                className="btn btn-primary text-white text-center hover:bg-black"
                onClick={() => router.push("/User/Memo/CellegeMemo")}
            >

                College {"   "}  
            </div>

            <div
                className="btn btn-primary text-white text-center hover:bg-black"
                onClick={() => router.push("/User/Memo/RoleMemo")}
            >

                Personal {"   "}  
            </div>








        </div>
    )
}