type MyProps={
    title:string
}

export default function LargeTextInput(props: MyProps){
    return(
        <div className="">

        <h1
        className="text-black text-3xl"
        >
       {props.title}
        </h1>
        <textarea
            className="w-full bg-primaryColour rounded-lg h-[500px]"
        >


        </textarea>




    </div> 
    )
}