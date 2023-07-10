// import { ChangeEvent, useState } from 'react';

// interface UploadFileProps {
//   onFileUpload: (file: File | null) => void;
// }

// const FileInput: React.FC<UploadFileProps> = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0] || null;
//     setSelectedFile(file);
//     onFileUpload(file);
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         onChange={handleFileChange}
//         className="py-2 px-4 bg-gray-200 rounded-lg"
//       />
//       {selectedFile && (
//         <p className="text-gray-600 mt-2">Selected File: {selectedFile.name}</p>
//       )}
//     </div>
//   );
// };

// export default FileInput;
type FileInputProps = {
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





export default function FileInput(props: FileInputProps){
    return(
        <div className=" w-full">
            <div className="form-control w-full  mx-auto">
                <label className="label">
                    <span className="label-text text-black text-base">{props.name}</span>

                </label>
                <input type="file"
                    placeholder={props.placeholder}
                    className="input input-bordered w-full  input-primary "
                />

            </div>
        </div>
    )
}
