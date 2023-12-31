import Head from "next/head";
import Footer from "../navigation/Footer";
import NavBar from "../navigation/NavBar";
import SideBar from "../navigation/SideBar";
import { hasCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import UserSideBar from "../navigation/User/UserSide";
import UserNav from "../navigation/User/UserNav";

export default function LoggedLayout({ children }: { children?: JSX.Element }) {
    const router = useRouter()


    function checkUser() {
        const userCheck = hasCookie("NormUser")

        console.log(userCheck)

        if (userCheck == false) {
            router.push("/")
        }
    }



    useEffect(() => {
        checkUser()
    }, [])

    return (
        <div className="grid lg:min-h-screen grid-rows-header  ">
            {/* <NavBar /> */}
            <UserNav/>
            <div className="grid md:grid-cols-sidebar ">
                <UserSideBar />
                <div
                    className=" min-h-screen px-10 py-5"
                >
                    <main>
                        <Head>
                            <title>MTU MEMO</title>
                            <meta name="description" content="Generated by create next app" />
                            <link rel="icon" href="/mtulogo.ico" />
                        </Head>

                        {children}
                    </main>

                </div>

            </div>
            <Footer />
        </div>
    );

}




// return (
//     <div>
//         <div className="grid min-h-screen grid-rows-header bg-red-500">
//             {/* <EmpNav/> */}
//             <div>Navbar</div>
//             {/* <div className="bg max-w-full mx-auto py-5 px-10 md:py-10 md:px-20 min-h-screen md:min-h-0"> */}
//              <div  className="grid md:grid-cols-sidebar" >
//                 <div>sidebar</div>
//                 <main>
//                     <Head>
//                         <title>MTU MEMO</title>
//                         <meta name="description" content="Generated by create next app" />
//                         <link rel="icon" href="/logo.ico" />
//                     </Head>

//                     {children}
//                 </main>

//             </div>

//         </div>
//         <Footer />
//     </div>
// );
