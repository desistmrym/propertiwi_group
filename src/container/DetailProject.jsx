import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { list_perum } from "../assets/list_image";
import { FaMapLocationDot } from "react-icons/fa6";
import QRCode from "react-qr-code";

const DetailProject = () => {
  const { slug } = useParams();
  const [detail, set_detail] = useState({});

  useEffect(() => {
    handleData();
  }, []);

  const handleData = () => {
    const filtered = list_perum.filter((a) => a.slug === slug)[0];

    set_detail(filtered);
  };
  return (
    <div className="flex justify-center w-[100%] mt-[5rem] lg:mt-0">
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
              {detail && "details" in detail && detail.details.image.map((item) => (
                <SwiperSlide>
                  <img
                    src={item}
                    alt=""
                    className="object-cover rounded-xl w-[100%] h-[20vh] lg:h-[40vh]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-5">
                <div className="flex justify-between w-[100%]">
                    {detail && "details" in detail && detail.details.image_marker.map((item, key) => 
                        <img
                            key={key}
                            src={item}
                            alt=""
                            className={`${detail.details.image_marker.length > 1 && key === 0 ? 'h-10 lg:h-20' : 'h-8 lg:h-12'}`}
                        />
                    )}
                </div>

              <div className="mt-5 text-left">
                <h2 className="uppercase text-xl lg:text-3xl font-['Work-Sans-Bold']">
                  {detail.name}
                </h2>
                <div className="text-[#545454]">
                  <p className="my-3">{detail && "details" in detail && detail.details.description}</p>
                  <p className="mt-5">
                    <span className="font-['Work-Sans-Bold'] text-black">
                      Alamat :
                    </span>{" "}
                    {detail && "details" in detail && detail.details.address}
                  </p>
                  <p className="mt-3">
                    <span className="font-['Work-Sans-Bold'] text-black">
                      Total Unit :
                    </span>{" "}
                    {detail && "details" in detail && detail.details.total_unit}
                  </p>
                  <div className="mt-5">
                    <span className="bg-[#ffed00] py-2 px-4 rounded-xl text-black font-['Work-Sans-Bold']">
                      Tipe {detail && "details" in detail && detail.details.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-10 lg:mt-0 lg:w-1/3 lg:px-5">
            <div className="border-[3px] w-[100%] border-[#dbbc42] rounded-xl">
              <div className="p-4 mt-3">
                <a
                  href={detail && "details" in detail && detail.details.link}
                  target="_blank"
                  className="flex justify-center"
                >
                  <button className="bg-transparent text-sm flex gap-5 border border-[#6dab3c] text-[#6dab3c] focus:outline-none focus:border-[#6dab3c]">
                    <FaMapLocationDot className="text-xl" />
                    Buka di Google Maps
                  </button>
                </a>
                <div className="flex justify-center">
                    <QRCode value={detail && "details" in detail && detail.details.link} level="L" className="p-8" />
                </div>

                <div className='text-2xl text-left font-["Work-Sans-Bold"] text-[#545454]'>
                  KEUNGGULAN
                </div>
                <div className="mt-2">
                  <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
