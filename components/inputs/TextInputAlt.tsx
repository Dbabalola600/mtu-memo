
type TextInputProps = {
    id?: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: any;
    explacholder: any
    value?: string;
    errorMessage?: string;
    name: string;
    maxLength?: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}



function TextInputAlt(props: TextInputProps) {
    return (
        <div className=" w-full">
            <div className="form-control w-full mx-auto">
                <label className="label">
                    <span className="label-text text-black text-base">
                        {props.name} {props.explacholder}
                    </span>

                </label>
                <input type={props.type}
                    placeholder={props.placeholder}
                    className="input input-bordered w-full  input-primary " />

            </div>
        </div>

    )
}


export default TextInputAlt;