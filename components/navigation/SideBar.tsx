import { useState } from "react";


export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=":h-screen  bg-primaryColour">

            <div className="flex justify-between items-center px-4 py-6">

                <h1 className="text-white text-2xl font-bold lg:block hidden">Sidebar</h1>

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
            className="hidden lg:block"
            >
            dashboard
            </div>
            {isOpen && (
                <nav className="flex flex-col">
                    <a href="#" className="text-gray-300 hover:bg-gray-700 px-4 py-2">
                        Link 1
                    </a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 px-4 py-2">
                        Link 2
                    </a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 px-4 py-2">
                        Link 3
                    </a>
                </nav>
            )}
        </div>
    );
}
