import Link from "next/link";
import { useState } from "react";



export default function NavBar() {


    return (
        <nav className="bg-primaryColour shadow-lg">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white py-4 px-2">
                            LOGO
                        </a>
                       
                    </div>

                    <div className="flex space-x-4">
                        <div className="hidden md:inline-flex md:space-x-6 lg:space-x-10 md:items-center">
                            <div className="flex md:space-x-4 lg:space-x-6">

                                <Link href="/" passHref>
                                    <p className="cursor-pointer py-2 px-4 ring-2 rounded-sm ring-black text-white bg-black hover:bg-white hover:text-black">
                                        Home
                                    </p>
                                </Link>

                                <Link href="/" passHref>
                                    <p className="cursor-pointer py-2 px-4 ring-2 rounded-sm ring-black text-white bg-black hover:bg-white hover:text-black">
                                        Profile
                                    </p>
                                </Link>

                                <button
                                
                                    // onClick={logout}
                                    className="cursor-pointer py-2 px-4 ring-2 rounded-sm ring-black text-white bg-red-500 hover:bg-white hover:text-black">
                                    {/* {isLoading ? "Loading..." : "LOGOUT"} */}
                                    
                                    LogOut
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}