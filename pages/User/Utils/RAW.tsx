import { memo } from "react"



type MyProps = {
    title: string
    role: string
    department: string
    sender : string
    date: string
}



export default function Raw(props: MyProps) {
    return (

        <div
            className="border-2 border-black min-h-screen"
        >

            <div
                className="text-center text-black text-2xl mt-2"
            >
                MOUNTAIN TOP UNIVERSITY

                {props.role === "Lecturer" ? (
                    <div>
                        <div>
                            OFFICE OF {props.role}
                        </div>
                    </div>
                ) : (
                    <div>

                     Department of {props.department}
                    </div>
                )}


                <div>
                    Internal Memo
                </div>

                <div>
                    school logo
                </div>
            </div>

            <div
                className="text-black text-2xl  divide-x-[3px] divide-black grid grid-cols-2 mx-3 border-2 border-black mt-5 px-2 "
            >
                <div
                    className=""
                >
                    From: {props.sender}

                    {/* <div
                        className="mt-14"
                    >
                        ref
                    </div> */}
                </div>

                <div
                    className="text-right"
                >
                    To:  [ import reciever]


                    <div
                        className="mt-14"
                    >
                        Date : {props.date}
                    </div>
                </div>



            </div>



            <div
                className="text-center mt-5 text-2xl text-black "
            >
                {props.title}
            </div>

            <div
                className="text-black text-justify mx-3 text-lg whitespace-pre-line"
            >

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum integer enim neque volutpat. Nibh tellus molestie nunc non blandit massa enim nec. Sit amet mattis vulputate enim. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Integer malesuada nunc vel risus commodo. Volutpat maecenas volutpat blandit aliquam etiam. Eu facilisis sed odio morbi quis commodo odio. Et magnis dis parturient montes nascetur ridiculus mus. Velit euismod in pellentesque massa placerat. Bibendum est ultricies integer quis auctor elit sed vulputate. Purus faucibus ornare suspendisse sed nisi lacus sed viverra.

                Morbi leo urna molestie at elementum. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Nibh praesent tristique magna sit amet purus gravida quis. Risus nec feugiat in fermentum posuere. Ut enim blandit volutpat maecenas volutpat blandit. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Arcu cursus vitae congue mauris. Ut aliquam purus sit amet luctus venenatis lectus. Nibh mauris cursus mattis molestie a iaculis at. Adipiscing at in tellus integer feugiat scelerisque varius. Et egestas quis ipsum suspendisse ultrices gravida dictum. Faucibus a pellentesque sit amet porttitor eget dolor. Egestas integer eget aliquet nibh praesent tristique magna sit amet.

                Massa sapien faucibus et molestie. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Justo nec ultrices dui sapien eget mi proin sed. Eget arcu dictum varius duis at consectetur. Integer enim neque volutpat ac tincidunt vitae semper. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Amet tellus cras adipiscing enim eu turpis egestas. Eget dolor morbi non arcu risus quis varius quam. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Ac feugiat sed lectus vestibulum mattis. Tincidunt arcu non sodales neque sodales. Sagittis vitae et leo duis ut diam quam nulla porttitor. Non blandit massa enim nec dui nunc mattis enim. Quisque egestas diam in arcu cursus euismod quis.

                Cras sed felis eget velit aliquet. Magna fermentum iaculis eu non. Elementum sagittis vitae et leo duis ut diam quam nulla. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Pellentesque nec nam aliquam sem et tortor consequat. Vitae congue eu consequat ac felis donec. Commodo quis imperdiet massa tincidunt nunc pulvinar. Pulvinar sapien et ligula ullamcorper malesuada proin. Lectus quam id leo in vitae. Volutpat diam ut venenatis tellus in metus. Vulputate mi sit amet mauris commodo quis.

                Nulla malesuada pellentesque elit eget gravida cum. Dolor sit amet consectetur adipiscing elit. Amet massa vitae tortor condimentum lacinia quis. Nunc congue nisi vitae suscipit. Felis imperdiet proin fermentum leo. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Nibh sed pulvinar proin gravida. Est ullamcorper eget nulla facilisi etiam. Enim diam vulputate ut pharetra sit. Vitae elementum curabitur vitae nunc.

                Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Consequat semper viverra nam libero justo laoreet. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Lorem ipsum dolor sit amet consectetur. Id donec ultrices tincidunt arcu. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Augue interdum velit euismod in pellentesque massa placerat duis. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Justo eget magna fermentum iaculis eu non diam phasellus. Odio ut enim blandit volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Quam lacus suspendisse faucibus interdum posuere. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.

                Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Massa ultricies mi quis hendrerit dolor magna. Neque vitae tempus quam pellentesque nec nam. Vestibulum lectus mauris ultrices eros in. Est pellentesque elit ullamcorper dignissim. Porttitor eget dolor morbi non arcu risus quis varius. Ante in nibh mauris cursus. Convallis convallis tellus id interdum. Enim tortor at auctor urna nunc. Lorem sed risus ultricies tristique nulla aliquet. Habitant morbi tristique senectus et netus. Blandit aliquam etiam erat velit scelerisque in. Sollicitudin aliquam ultrices sagittis orci. Nunc sed id semper risus in. Purus sit amet volutpat consequat mauris nunc congue nisi. Arcu non odio euismod lacinia at. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Tortor aliquam nulla facilisi cras.

                Id nibh tortor id aliquet lectus proin. Eu consequat ac felis donec et odio pellentesque. Posuere ac ut consequat semper viverra nam libero justo laoreet. Eget sit amet tellus cras adipiscing. Phasellus egestas tellus rutrum tellus. Velit dignissim sodales ut eu sem. Id diam vel quam elementum. Aliquam purus sit amet luctus venenatis lectus. Quisque non tellus orci ac auctor augue mauris augue neque. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Ac tincidunt vitae semper quis. Pellentesque id nibh tortor id aliquet. Faucibus purus in massa tempor nec feugiat nisl pretium.

                Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Semper eget duis at tellus at. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Elementum nisi quis eleifend quam adipiscing vitae. Vitae et leo duis ut diam quam nulla porttitor. Diam ut venenatis tellus in. Habitant morbi tristique senectus et netus et malesuada fames. Enim nec dui nunc mattis enim ut tellus. Ullamcorper eget nulla facilisi etiam dignissim diam. Consectetur adipiscing elit duis tristique sollicitudin nibh. Ultrices in iaculis nunc sed augue lacus viverra. Ut tortor pretium viverra suspendisse potenti nullam. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Senectus et netus et malesuada fames ac turpis egestas. Id leo in vitae turpis massa sed.

                Bibendum arcu vitae elementum curabitur vitae nunc sed. Augue lacus viverra vitae congue eu consequat ac felis donec. Adipiscing bibendum est ultricies integer quis auctor elit sed. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Integer eget aliquet nibh praesent tristique magna sit amet. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Diam quis enim lobortis scelerisque. Consequat nisl vel pretium lectus quam id leo. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Volutpat ac tincidunt vitae semper quis. Et netus et malesuada fames ac. Non sodales neque sodales ut.
            </div>

        </div>

    )
}