import { logo } from "../assets/list_image";
import CoverHeader from "../component/cover_header";
import QRCode from "react-qr-code";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  const qrValue = "https://maps.app.goo.gl/qGKrFY68M3eAW8Fx7?g_st=com.google.maps.preview.copy"; // The URL or text for the QR code
  const logoUrl = logo;
  return (
    <div>
      <CoverHeader type="header_1" />

      <div className="my-0 lg:my-10 w-[100%] flex justify-center ">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap my-5 lg:my-10">
            <div className="w-[100%] lg:w-1/3 flex justify-center items-center">
              <div>
                <div className="flex justify-center">
                  <img src={logo} alt="logo" className="lg:h-[20vh]" />
                </div>
                <div className="text-xl font-['Work-Sans-Bold'] text-[#3033ac]">
                  PROPERTIWI GROUP
                </div>
              </div>
            </div>
            <div className="w-[100%] lg:w-1/3 mt-5 lg:mt-0 text-left">
              <div className='text-[30px] text-center font-["Work-Sans-Bold"] text-[#545454]'>
                KONTAK KAMI
              </div>
              <div className="flex justify-center mt-2">
                <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
              </div>

              <div className="mt-5 lg:mt-10">
                <p className="font-['Work-Sans-Bold']">KANTOR PUSAT :</p>
                <p>Ruko Bussiness Park TangCity, Blok E no. 5, Tangerang</p>

                <p className="font-['Work-Sans-Bold'] mt-5">
                  Operasional Hour :
                </p>
                <p>Senin - Jumat : 09:00 - 17:00</p>
                <p>Sabtu : 09:00 - 13:00</p>

                <p className="font-['Work-Sans-Bold'] mt-5">
                  Staff Kantor Pusat :
                </p>
                <p>Roy : 082311711746</p>
                <p>Payo : 081260182068</p>

                <p className="font-['Work-Sans-Bold'] mt-5">Email :</p>
                <p>Propertiwi.group@gmail.com</p>
              </div>
            </div>
            <div className="w-[100%] lg:w-1/3 mt-5 lg:mt-10 text-left">
                <div className="my-5">
                    <a href={qrValue} target="_blank">
                        <button className="bg-transparent flex gap-5 border border-[#6dab3c] text-[#6dab3c] focus:outline-none focus:border-[#6dab3c]">
                            <FaMapLocationDot className="text-2xl" />
                            Buka di Google Maps
                        </button>
                    </a>
                </div>
                <QRCode 
                    value={qrValue}
                    level="L"
                />
            </div>
          </div>
            <div className="flex justify-center">
                <div className="mt-5 lg:mt-10">
                    <div className='text-[30px] text-center lg:text-left font-["Work-Sans-Bold"] text-[#545454]'>
                        HUBUNGI KAMI
                    </div>
                    <div className="flex justify-center mt-2">
                        <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
                    </div>

                </div>
            </div>
            <p className="mt-5">
                Untuk informasi lebih lanjut tentang perusahaan atau layanan kami, silakan untuk menghubungi kami melalui:
            </p>
          <div className="mt-5 border-2 border-[#dbbc42] rounded-xl p-5">
            <div className="flex gap-5 py-2">
                <input type="text" name="nama" className="rounded-xl px-5 py-1 bg-transparent border border-[#545454] w-full" placeholder="Isi Nama Anda" />
            </div>
            <div className="flex gap-5 py-2">
                <div className="flex gap-5 w-1/2">
                    <input type="email" name="email" className="rounded-xl px-5 py-1 bg-transparent border border-[#545454] w-full" placeholder="Isi Email Anda" />
                </div>
                <div className="flex gap-5 w-1/2">
                    <input type="number" name="phone" className="rounded-xl px-5 py-1 bg-transparent border border-[#545454] w-full" placeholder="Isi No Telepon / HP Anda" />
                </div>
            </div>
            <div className="flex gap-5 py-2">
                <input type="text" name="subject" className="rounded-xl px-5 py-1 bg-transparent border border-[#545454] w-full" placeholder="Isi Subject Anda" />
            </div>
            <div className="py-2">
                <textarea type="text" name="message" className="rounded-xl px-5 py-1 bg-transparent border border-[#545454] w-full h-[10vh]" placeholder="Isi Message Anda"></textarea>
            </div>

            <div className="mt-1 text-left">
                <button className="bg-[#dbbc42] py-2 px-10 text-white font-['Work-Sans-Bold']">Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
