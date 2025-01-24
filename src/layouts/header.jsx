import { useState } from "react";
import { logo } from "../assets/list_image";
import { list_header } from "../assets/list_data";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Header = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const activeLink = location.pathname || '';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative z-[9] flex justify-center text-white">
            <div className="hidden lg:flex justify-center bg-gradient-to-r from-black to-[#3533cd] w-[100%] py-4 lg:py-6 font-['Work-Sans-Bold']">
                <div className="flex justify-between container">
                    <div className="flex gap-4">
                        <img src={logo} alt="logo" className="object-cover w-8 h-8 rounded-full" />
                        <div className="mt-[3px] text-[16px] tracking-[.04rem]">PROPERTIWI GROUP</div>
                    </div>
                    <div className="flex gap-4 lg:gap-10 mt-[5px] cursor-pointer">
                        {list_header.map((item, key) => 
                            <a
                                key={key}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate(`${item.link}`);
                                }}
                                className={`hover:text-[#dbbc42] transition-all duration-300 ${
                                    activeLink === item.link ? 'text-[#dbbc42]' : ''
                                }`}
                            >
                                {item.name}
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="fixed w-[100%] flex justify-start lg:hidden bg-[#3033ac] py-4 container font-['Work-Sans-Bold']">
                <button
                    className="lg:hidden relative z-[9] p-2 bg-transparent focus:outline-none focus:border-none"
                    onClick={toggleMenu}
                >
                    {!isOpen ?
                        <HiOutlineMenu className="text-2xl" />
                    :
                        <MdClose className="text-2xl" />
                    }
                </button>

                <div className="flex gap-4 pl-3 mt-1 relative z-[9]">
                    <img src={logo} alt="logo" className="object-cover w-8 h-8 rounded-full" />
                    <div className="mt-[3px] text-[16px] tracking-[.04rem]">PROPERTIWI GROUP</div>
                </div>

                <div
                    className={`lg:flex lg:items-center lg:space-x-4 absolute top-0 right-0 w-full h-screen bg-gray-800 bg-opacity-90 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
                >
                    <ul className="flex flex-col items-start space-y-6 mt-20 mx-5">
                        {list_header.map((item, key) =>
                            <li>
                                <a 
                                    key={key}
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(`${item.link}`);
                                        setIsOpen(false)
                                    }} 
                                    className={`${activeLink === item.link ? 'text-[#dbbc42]' : 'text-white'} text-xl`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;