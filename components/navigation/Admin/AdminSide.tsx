import Link from "next/link";
import { useState } from "react";


export default function AdminSideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const Content = [
        { title: "Dashboard", link: "/Admin/DashBoard" },
        { title: "Admins", link: "/Admin/admin" },
        { title: "Users", link: "/Admin/User" },
        { title: "Memos", link: "/Admin/Memo/" },
        { title: "Department", link: "/Admin/Memo/Department/" },
        { title: "College", link: "/Admin/Memo/College/" }
    ]
    return (
        <div className=":h-screen  bg-primaryColour">

            <div className="flex justify-between items-center px-4 py-6">

                {/* <h1 className="text-white text-2xl font-bold lg:block hidden">Sidebar</h1> */}

                <button
                    className="text-white focus:outline-none lg:hidden  focus:text-white text-right  "
                    onClick={toggleSidebar}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

            </div>

            <div
                className="hidden lg:block px-4 space-y-3"
            >

                {Content.map((info, index) => (
                    <Link
                        href={info.link}
                        key={index}
                    >
                        <div
                            className=" text-white cursor-pointer text-2xl hover:bg-green-500 hover:text-primary rounded-lg px-3 py-5 "
                        >
                            {info.title}
                        </div>
                    </Link>
                ))}
            </div>

            
            {isOpen && (
                <nav className="flex flex-col">

                    {Content.map((info, index) => (
                        <Link
                            href={info.link}
                            key={index}
                        >
                            <div
                                className=" text-white cursor-pointer  hover:bg-green-500 hover:text-primary rounded-lg px-3 py-2 "
                            >
                                {info.title}
                            </div>
                        </Link>
                    ))}

                </nav>
            )}
        </div>
    );



}




