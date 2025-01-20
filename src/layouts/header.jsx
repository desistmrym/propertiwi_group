import { logo } from "../assets/list_image";

const Header = () => {
    return (
        <div className="relative z-[1] bg-[#3033ac] p-4 flex justify-center text-white">
            <div className="container">
                <div className="flex justify-between font-['Work-Sans-Bold']">
                    <div className="flex gap-4">
                        <img src={logo} alt="logo" className="object-cover w-8 h-8 rounded-full" />
                        <div className="mt-[3px] text-[16px] tracking-[.04rem]">PROPERTIWI GROUP</div>
                    </div>
                    <div className="flex gap-4 lg:gap-10 mt-[5px] text-[14px] cursor-pointer">
                        <a className="text-[#dbbc42] hover:text-[#dbbc42]">Home</a>
                        <a className="hover:text-[#dbbc42]">Proyek</a>
                        <a className="hover:text-[#dbbc42]">Tentang Kami</a>
                        <a className="hover:text-[#dbbc42]">Kontak & Karir</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;