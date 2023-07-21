


import router from "next/router";



type BarProps = {

    allLink: any
  others : any 
  othersLink: any
    // foodLink:any
    // specialLink: any



}






export default function AdminMemoBar(props: BarProps) {
    return (
        <div
            className="grid grid-flow-col overflow-x-scroll mt- p-5   gap-5  "   
        >




            <div
                className="btn btn-primary text-white text-center hover:bg-green-500"
                onClick={() => router.push("/User/Memo/")}
            >

                All {"   "}  
            </div>


            <div
                className="btn btn-primary text-white text-center hover:bg-green-500"
                onClick={() => router.push(`${props.othersLink}`)}
            >

                {props.others} {"   "}  
            </div>

          







        </div>
    )
}