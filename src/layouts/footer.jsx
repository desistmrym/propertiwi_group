import { facebook, list_sosmed, logo_png } from "../assets/list_image";

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-black to-[#3533cd] flex justify-center">
            <div className="container">
                <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-10 w-[100%] justify-between py-8 px-5 lg:py-5 lg:px-5 text-white">
                    <div className="text-left w-[100%] lg:w-1/3">
                        <div className="flex justify-center mt-5">
                            <img src={logo_png} alt="" className="rounded-full h-[10vh] lg:h-[12vh]" />
                        </div>
                        <p className="my-4 mb-0 text-center font-['Inter-Bold']">PROPERTIWI GROUP</p>
                        <p className="text-center font-['Inter-Bold'] text-[12px]">-Since 2008-</p>

                        <div className="mt-4 font-['Work-Sans-Bold']">
                            <p className="mb-0">PT. Propertiwi Banguncitra Lestari</p>
                            <p className="mb-0">PT. Propertiwi Bangunpuri Madya</p>
                            <p className="mb-0">PT. Propertiwi Bangunsarana Indah</p>
                        </div>
                    </div>
                    <div className="text-left mt-5 w-[100%] lg:w-1/3">
                        <p className="font-['Work-Sans-Bold']">Kantor Pemasaran :</p>
                        <p>Perumahan Grand Village Sepatan</p>
                        <p>Perumahan Bonisari Sarana Indah</p>

                        <div className="mt-3">
                            <p>Senin - Minggu : 09:00 - 17:00</p>
                        </div>

                        <div className='border-t border-[#dbbc42] w-[100%] my-5'></div>

                        <p className="font-['Work-Sans-Bold']">Kantor Pusat :</p>
                        <p>Ruko Bussiness Park TangCity,</p>
                        <p>Blok E no. 5 - Tangerang</p>

                        <div className="mt-3">
                            <p>Senin - Jumat : 09:00 - 17:00</p>
                            <p>Sabtu : 09:00 - 14:00</p>
                        </div>
                    </div>
                    <div className="text-left mt-5 w-[100%] lg:w-1/3">
                        <p className="font-['Work-Sans-Bold']">Email :</p>
                        <p>Propertiwi.group@gmail.com</p>

                        <p className="mt-5 font-['Work-Sans-Bold']">Hubungi / WhatsApp :</p>
                        <p>Roy 082311711746</p>
                        <p>Irfandi 08892160028</p>
                        <p>Lorenzo 085159415811</p>

                        <div className="mt-5">
                            <p className="font-['Work-Sans-Bold']">Social Media</p>
                            <div className="flex gap-5 mt-5">
                                {list_sosmed.map((item, key) => 
                                    <a href={item.link} target="_blank" key={key}>
                                        <img src={item.icon} alt="" className="h-8" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;