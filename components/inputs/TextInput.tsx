
type TextInputProps = {
    id?: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: any;
    explacholder?: any
    value?: string;
    errorMessage?: string;
    name: string;
    maxLength?: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}



function TextInput(props: TextInputProps) {
    return (
        <div className=" w-full">
            <div className="form-control w-full  mx-auto">
                <label className="label">
                    <span className="label-text text-black text-3xl">{props.name}</span>
                    
                </label>
                <input type={props.type}
                 placeholder={props.placeholder}
                 className="input input-bordered w-full h-10 input-primaryColour "             
                />
              
            </div>
        </div>

    )
}


export default TextInput;