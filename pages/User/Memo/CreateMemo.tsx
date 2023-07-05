import LoggedLayout from "../../../components/Layouts/LoggedLayout";
import DropDown from "../../../components/inputs/DropDown";
import LargeTextInput from "../../../components/inputs/LargeTextInput";
import TextInput from "../../../components/inputs/TextInput";
import NavButton from "../../../components/navigation/NavButton";
import Header from "../../../components/shared/Header";




export default function CreateMemo() {

    const Department = [
        { name: "Computer Science and Mathematics" },
        { name: "Physics" },
        { name: "Biochemistry" },
        { name: "Chemistry" },
        { name: "Biological Sciences" },
        { name: "Fine Arts" }
    ]


    return (
        <LoggedLayout>
            <>
                <Header
                    title="Create Memo"
                />

                <form
                    // onSubmit={trans}
                    className="w-full py-20 space-y-12  text-black text-base md:text-xl"
                >
                    <div className="mx-auto  w-full ">
                        <TextInput
                            placeholder="Title"
                            name="Title"
                            type='text'

                        />
                    </div>



                    <LargeTextInput
                        title="Content"
                    />

                    <div>
                        <label>
                            <span className="label-text text-black text-3xl">Department</span>

                        </label>
                        <select className="select select-primary w-full ">
                            <option disabled selected>None</option>

                            {Department.map((depart, index) => (
                                <option
                                    key={index}
                                >
                                    {depart.name}
                                </option>
                            ))}



                        </select>


                    </div>




                </form>

                {/* <div
                    className="w-full py-20  text-black text-base md:text-xl"

                >

                    <NavButton
                        uLink="/"
                        title="Department"
                    />

                    <NavButton
                        uLink="/"
                        title="College"
                    />

                </div> */}





            </>

        </LoggedLayout>
    )
}