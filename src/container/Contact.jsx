import { logo } from "../assets/list_image";
import CoverHeader from "../component/cover_header";
import QRCode from "react-qr-code";
import { FaMapLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getContact } from "../api/information";
import Loading from "../component/loading";
import Feedback from "../component/feedback";

const Contact = () => {
  const [contact, setContact] = useState({});
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    setIsLoad(true)
    handleContact();
  }, [])

  const handleContact = async () => {
    const result = await getContact()
    try {
      if (result.length > 0) {
        setContact(result[0]);
      }
    } catch (err) {
      console.log(err)
    }
    setIsLoad(false)
  }


  return (
    <>
      {!isLoad ? 
        <div>
          <CoverHeader type="header_1" data={null} />

          <div className="my-0 lg:my-10 w-[100%] flex justify-center ">
            {contact && "acf" in contact ? 
              <div className="container">
                <div className="flex flex-wrap lg:flex-nowrap my-5 lg:my-10">
                  <div className="w-[100%] lg:w-1/3 flex justify-center items-center">
                    <div>
                      <div className="flex justify-center">
                        <img src={logo} alt="logo" className="lg:h-48" />
                      </div>
                      <div className="text-xl font-['Work-Sans-Bold'] text-[#3033ac]">
                        PROPERTIWI GROUP
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] lg:w-1/3 mt-10 lg:mt-0 text-left">
                    <div className='text-[30px] text-center font-["Work-Sans-Bold"] text-[#545454]'>
                      KONTAK KAMI
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
                    </div>

                    <div className="mt-5 lg:mt-10">
                      <p className="font-['Work-Sans-Bold']">KANTOR PUSAT :</p>
                      <div dangerouslySetInnerHTML={{ __html: contact.acf.kantor_pusat.alamat }}></div>

                      <p className="font-['Work-Sans-Bold'] mt-5">
                        Operasional Hour :
                      </p>
                      <div dangerouslySetInnerHTML={{ __html: contact.acf.kantor_pusat.jadwal }}></div>

                      <p className="font-['Work-Sans-Bold'] mt-5">
                        Staff Kantor Pusat :
                      </p>
                      <div dangerouslySetInnerHTML={{ __html: contact.acf.kantor_pusat.staff.replace(/<p>/g, '<p class="py-1">') }}></div>

                      <p className="font-['Work-Sans-Bold'] mt-5">Email :</p>
                      <p>{contact.acf.email}</p>
                    </div>
                  </div>
                  <div className="w-[100%] lg:w-1/3 mt-10 text-left">
                    <div className="flex justify-center">
                      <div>
                        <div className="my-5">
                            <a href={contact.acf.google_maps} target="_blank">
                                <button className="bg-transparent flex gap-5 border border-[#6dab3c] text-[#6dab3c] focus:outline-none focus:border-[#6dab3c]">
                                    <FaMapLocationDot className="text-2xl" />
                                    Buka di Google Maps
                                </button>
                            </a>
                        </div>
                        <QRCode 
                            value={contact.acf.google_maps}
                            level="L"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                    <div className="mt-10">
                        <div className='text-[30px] text-center lg:text-left font-["Work-Sans-Bold"] text-[#545454]'>
                            HUBUNGI KAMI
                        </div>
                        <div className="flex justify-center mt-2">
                            <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
                        </div>

                    </div>
                </div>
                <div className="lg:mx-[6rem]">
                  <p className="mt-5">
                      Untuk informasi lebih lanjut tentang perusahaan atau layanan kami, silakan untuk menghubungi kami melalui:
                  </p>
                  <Feedback />
                </div>
              </div>
            : null}
          </div>
        </div>
      :
        <Loading />
      }
    </>
  );
};

export default Contact;
