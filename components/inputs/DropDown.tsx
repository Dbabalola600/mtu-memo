type DropDownProps={
    title: string;
    option: string
}


export default function DropDown(props:DropDownProps) {
    return (
        <div>
            <label>
                <span className="label-text text-black text-3xl">{props.title}</span>

            </label>
            <select className="select select-primary w-full ">
                <option disabled selected>None</option>
                <option>{props.option}</option>
               
            </select>


        </div>
    )
}