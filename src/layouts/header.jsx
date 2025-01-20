import { useState } from "react";
import { logo } from "../assets/list_image";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative z-[9] flex justify-center text-white">
            <div className="hidden lg:flex justify-center bg-[#3033ac] w-[100%] py-4 font-['Work-Sans-Bold']">
                <div className="flex justify-between container">
                    <div className="flex gap-4">
                        <img src={logo} alt="logo" className="object-cover w-8 h-8 rounded-full" />
                        <div className="mt-[3px] text-[16px] tracking-[.04rem]">PROPERTIWI GROUP</div>
                    </div>
                    <div className="flex gap-4 lg:gap-10 mt-[5px] cursor-pointer">
                        <a className="text-[#dbbc42] hover:text-[#dbbc42]">Home</a>
                        <a className="hover:text-[#dbbc42]">Proyek</a>
                        <a className="hover:text-[#dbbc42]">Tentang Kami</a>
                        <a className="hover:text-[#dbbc42]">Kontak & Karir</a>
                    </div>
                </div>
            </div>
            <div className="fixed w-[100%] flex justify-start lg:hidden bg-[#3033ac] py-4 container font-['Work-Sans-Bold']">
                <button
                    className="lg:hidden relative z-[9] p-2 bg-transparent focus:outline-none focus:border-none"
                    onClick={toggleMenu}
                >
                    <span className="block w-6 h-1 bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-white"></span>
                </button>

                <div className="flex gap-4 pl-3 mt-1 relative z-[9]">
                    <img src={logo} alt="logo" className="object-cover w-8 h-8 rounded-full" />
                    <div className="mt-[3px] text-[16px] tracking-[.04rem]">PROPERTIWI GROUP</div>
                </div>

                <div
                    className={`lg:flex lg:items-center lg:space-x-4 absolute top-0 right-0 w-full h-screen bg-gray-800 bg-opacity-90 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
                >
                    <ul className="flex flex-col items-start space-y-6 mt-20 mx-5">
                        <li>
                            <a href="#home" className="text-white text-xl" onClick={() => setIsOpen(false)}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-white text-xl" onClick={() => setIsOpen(false)}>
                                Proyek
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="text-white text-xl" onClick={() => setIsOpen(false)}>
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white text-xl" onClick={() => setIsOpen(false)}>
                                Kontak & Karir
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;