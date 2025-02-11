import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import QRCode from "react-qr-code";
import { getProjectBySlug } from "../api/project";
import Loading from "../component/loading";

const DetailProject = () => {
  const { slug } = useParams();
  const [detail, set_detail] = useState({});
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    window.scroll(0,0)
    setIsLoad(true)
    handleData();
  }, []);

  const handleData = async () => {
    setIsLoad(true)
    const result = await getProjectBySlug(slug);
    try {
      if (result.length > 0) {
        set_detail(result[0])
      }
      setIsLoad(false)
    } catch (err) {
      console.log('Error ',err)
      setIsLoad(false)
    }
  };
  return (
    <div className="flex justify-center w-[100%] mt-[5rem] lg:mt-0">
      {!isLoad ? 
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap py-5 lg:py-10">
            <div className="w-[100%] lg:w-2/3">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={false}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {detail && "acf" in detail && detail.acf.image_banner.map((item, key) => (
                  <SwiperSlide key={key}>
                    <img
                      src={item.url}
                      alt=""
                      className="object-cover rounded-xl w-[100%] h-[25vh] lg:h-[50vh]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-5">
                  {detail && "acf" in detail ?
                  <div className="flex justify-between w-[100%]">
                      {detail.acf.logo !== false ? 
                        <img  
                          src={detail.acf.logo}
                          alt=""
                          className="h-16 lg:h-20"
                        />
                      : null} 
                      {"value" in detail.acf.project_status && detail.acf.project_status.value === 'sold_out' ?
                        <div className="my-3 border-2 border-[#ff1a25] p-1 h-[100%]">
                          <div className="bg-[#ff1a25] text-white px-5 py-2">
                            {detail.acf.project_status.label}
                          </div>
                        </div>
                      :
                        <div className="my-3 border-2 border-[#00bf63] p-1  h-[100%]">
                          <div className="bg-[#6bcf41] text-white px-5 py-2">
                            {detail.acf.project_status.label}
                          </div>
                        </div>
                      }
                  </div>
                  : null}

                <div className="mt-5 text-left">
                  <h2 className="uppercase text-xl lg:text-3xl font-['Inter'] font-bold">
                    {detail && "acf" in detail && detail.acf.name}
                  </h2>
                  <div className="text-[#545454]">
                    <div className="my-3 text-justify lg:text-left" dangerouslySetInnerHTML={{ __html: detail && "acf" in detail && detail.acf.description }}></div>
                    <p className="mt-5 lg:mt-10">
                      <span className="font-['Inter'] font-bold text-black">
                        Alamat :
                      </span>{" "}
                      {detail && "acf" in detail && detail.acf.alamat}
                    </p>
                    {detail && "acf" in detail && detail.acf.luas_proyek !== "" ? 
                      <p className="mt-3">
                        <span className="font-['Inter'] font-bold text-black">
                          Luas Proyek :
                        </span>{" "}
                        {detail.acf.luas_proyek}
                      </p>
                    : null}
                    <p className="mt-3">
                      <span className="font-['Inter'] font-bold text-black">
                        Total Unit :
                      </span>{" "}
                      {detail && "acf" in detail && detail.acf.total_unit}
                    </p>
                    <div className="mt-8 lg:mt-10">
                      <span className="bg-[#ffed00] py-2 px-4 rounded-xl text-black font-['Inter'] font-bold">
                        Tipe {detail && "acf" in detail && detail.acf.tipe}
                      </span>
                    </div>
                  </div>
                  {detail && "acf" in detail && detail.acf.specification !== false ? 
                    <div className="text-black mt-8 lg:mt-10">
                        <p className="font-['Inter'] text-xl font-bold underline">Spesifikasi :</p>
                        <div className="my-3">
                          <table>
                            <thead></thead>
                            <tbody>
                              {detail.acf.specification.map((item, key) =>
                                <tr key={key}>
                                    <td className="font-['Inter'] font-bold">{item.spec}</td>
                                    <td className="pl-3 lg:pl-5">:</td>
                                    <td className="pl-3">{item.value}</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                    </div>
                  : null}

                  <div className="mt-8 lg:mt-10 flex flex-wrap lg:flex-nowrap  gap-5 lg:gap-12">
                    {detail && "acf" in detail && detail.acf.denah_rumah !== false ? 
                      <div>
                        <p className="font-['Inter'] text-xl font-bold underline">Denah Rumah :</p>
                        <ul className="list-disc mt-3 pl-5 font-['Inter']">
                          {detail.acf.denah_rumah.map((item, key) => 
                            <li key={key} className="py-1">{item.spec}</li>
                          )}
                        </ul>
                      </div>
                    : null}

                    {detail && "acf" in detail && detail.acf.denah_rumah_image !== false ? 
                      <img 
                        src={detail.acf.denah_rumah_image}
                        alt="Denah Rumah"
                        className="h-[50vh] object-contain w-[100%] lg:w-auto"
                      />
                    : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] mt-10 lg:mt-0 lg:w-1/3 lg:px-5">
              <div className="border-[3px] w-[100%] border-[#dbbc42] rounded-xl">
                <div className="p-4 mt-3 font-['Inter']">
                  <a
                    href={detail && "acf" in detail && detail.acf.google_maps !== '' ? detail.acf.google_maps : '#'}
                    target="_blank"
                    className="flex justify-center"
                  >
                    <button className="bg-transparent text-sm flex gap-5 border border-[#6dab3c] text-[#6dab3c] focus:outline-none focus:border-[#6dab3c]">
                      <FaMapLocationDot className="text-xl" />
                      Buka di Google Maps
                    </button>
                  </a>
                  <div className="flex justify-center">
                      {detail && "acf" in detail ? 
                        <QRCode value={detail.acf.google_maps} level="L" className="p-8" />
                      : null}
                  </div>

                  <div className="my-5 mb-0 lg:mb-[2rem]">
                    {detail && "acf" in detail && detail.acf.social !== false ? 
                      <div className="flex justify-center gap-5">
                        {detail.acf.social.map((item, key) => 
                          <a key={key} href={item.link !== '' ? item.link : '#'} target="_blank">
                            <img 
                              src={item.icon}
                              alt=""
                              className="h-10 object-cover"
                            />
                          </a>
                        )}
                      </div>
                    : null}
                  </div>

                  <div className='mt-5 lg:mt-10 text-2xl text-left font-["Inter"] font-bold text-[#545454]'>
                    KEUNGGULAN
                  </div>
                  <div className="mt-2">
                    <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
                  </div>
                  
                  <div className="text-left mt-5">
                    {detail && "acf" in detail && detail.acf.keunggulan.length > 0 && detail.acf.keunggulan.map((item, key) => 
                      <div key={key}>
                        <p className="py-1 font-['Work-Sans-Bold']">{item.label}</p>
                        {item.items.length > 0 && item.items.map((elm, x) => 
                          <div key={x} className="mt-2 mb-5" dangerouslySetInnerHTML={{ __html: elm.item.replace(/<ul>/g, '<ul class="list-disc pl-5">') }}></div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      : 
        <Loading />
      }
    </div>
  );
};

export default DetailProject;
