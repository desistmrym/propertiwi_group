import { useEffect, useState } from "react";
import { facebook, list_sosmed, logo_png } from "../assets/list_image";
import { getContact } from "../api/information";

const Footer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        handleData()
    }, [])

    const handleData = async () => {
        const result = await getContact()
        try {
            if (result.length > 0) {
                setData(result[0])
            }
        } catch (err) {
            console.log(err)
        }
    } 

    return (
        <div className="bg-gradient-to-r from-black to-[#3533cd] flex justify-center">
            {data && "acf" in data ? 
                <div className="container">
                    <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-10 w-[100%] justify-between py-8 px-5 lg:py-5 lg:px-5 text-white">
                        <div className="text-left w-[100%] lg:w-1/3">
                            <div className="flex justify-center mt-5">
                                <img src={logo_png} alt="" className="rounded-full h-[10vh] lg:h-[12vh]" />
                            </div>
                            <p className="my-4 mb-0 text-center font-['Inter-Bold']">PROPERTIWI GROUP</p>
                            <p className="text-center font-['Inter-Bold'] text-[12px]">-Since {data.acf.est_year}-</p>

                            <div className="mt-4 font-['Work-Sans-Bold']">
                                {data.acf.company_names.length > 0 ? 
                                    data.acf.company_names.map((item, key) => 
                                        <p key={key} className="mb-0">{item.name}</p>
                                    )
                                : null}
                            </div>
                        </div>
                        <div className="text-left mt-5 w-[100%] lg:w-1/3">
                            <p className="font-['Work-Sans-Bold']">Kantor Pemasaran :</p>
                            <div dangerouslySetInnerHTML={{ __html: data.acf.kantor_pemasaran.alamat }}></div>

                            <div className="mt-3" dangerouslySetInnerHTML={{ __html: data.acf.kantor_pemasaran.jadwal }}></div>

                            <div className='border-t border-[#dbbc42] w-[100%] my-5'></div>

                            <p className="font-['Work-Sans-Bold']">Kantor Pusat :</p>
                            <div dangerouslySetInnerHTML={{ __html: data.acf.kantor_pusat.alamat }} ></div>

                            <div className="mt-3" dangerouslySetInnerHTML={{ __html: data.acf.kantor_pusat.jadwal }}></div>
                        </div>
                        <div className="text-left mt-5 w-[100%] lg:w-1/3">
                            <p className="font-['Work-Sans-Bold']">Email :</p>
                            <p>{data.acf.email}</p>

                            <p className="mt-5 font-['Work-Sans-Bold']">Hubungi / WhatsApp :</p>
                            <div dangerouslySetInnerHTML={{ __html: data.acf.kantor_pusat.staff }}></div>

                            <div className="mt-5">
                                <p className="font-['Work-Sans-Bold']">Social Media</p>
                                <div className="flex gap-5 mt-5">
                                    {data.acf.social_media.length > 0 ? 
                                        data.acf.social_media.map((item, key) => 
                                            <a href={item.link} target="_blank" key={key}>
                                                <img src={item.icon} alt="" className="h-8" />
                                            </a>
                                        )
                                    : null }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            : null}
        </div>
    )
}

export default Footer;