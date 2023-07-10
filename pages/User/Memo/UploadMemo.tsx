import LoggedLayout from "../../../components/Layouts/LoggedLayout";
import FileInput from "../../../components/inputs/FileInput";
import Header from "../../../components/shared/Header";




export default function UploadMemo() {




    return (
        <LoggedLayout>
            <>
                <Header
                    title="Upload Memo"

                />
                <form>




                    <div className=" w-full">
                        <div className="form-control w-full  mx-auto">
                            <label className="label">
                                <span className="label-text text-black text-2xl">Upload</span>

                            </label>
                            <input type="file"
                                placeholder="Uplad"
                                className="input input-bordered w-full h-48  input-primary "
                            />

                        </div>
                    </div>
                    <button className="w-full btn-primary btn my-10 "
                        type="submit">
                        {/* {isLoading ? "Loading..." : "SIGN IN"} */}
                        SUBMIT
                    </button>
                </form>



            </>

        </LoggedLayout>
    )
}