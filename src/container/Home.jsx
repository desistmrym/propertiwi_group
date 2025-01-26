import { list_sosmed, list_achiev, list_cover } from "../assets/list_image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Perumahan from "../component/perumahan";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import moment from "moment";
import CountUp from "react-countup";
import Loading from "../component/loading";
import { getProject } from "../api/project";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoad, setIsLoad] = useState(false);
  const [listAddress, setListAddress] = useState([]);
  const [dataPerum, setDataPerum] = useState([]);

  useEffect(() => {
    setIsLoad(true)
    handlePerum();
  }, [])

  const handlePerum = async () => {
    const result = await getProject();
    try {
      const filterAddress = [...new Set(result.map(item => item.acf.location.name))];
      setDataPerum(result);
      setListAddress(filterAddress);
      setIsLoad(false);
    } catch (err) {
      setIsLoad(false);
    }
  }

  return (
    <>
      {!isLoad ? 
        <div>
          <div className="relative w-full">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={false}
              navigation={false}
              effect="fade" // Apply fade effect
              modules={[Autoplay, EffectFade]} // Include the EffectFade module
              className="mySwiper h-[100vh] lg:h-[80vh] lg:-mt-20"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track active slide index
            >
              {list_cover.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="absolute w-[100%] h-[100vh] z-[1]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                  ></div>
                  <div className="absolute z-[2] flex justify-center items-center h-[100vh] lg:h-[70vh] w-[100%]">
                    <div className="container text-white font-['Work-Sans-Bold'] lg:mt-20">
                      <motion.p
                        initial={{ opacity: 0, marginLeft: "-3rem" }}
                        animate={{
                          opacity: activeIndex === index ? 1 : 0,
                          marginLeft: activeIndex === index ? 0 : "-3rem",
                        }}
                        transition={{ duration: 1, delay: 1.2 }}
                        exit={{ opacity: 0, marginLeft: "-3rem" }}
                        className="text-left text-lg lg:text-2xl lg:tracking-[8px]"
                      >
                        {item.title}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, marginLeft: "-3rem" }}
                        animate={{
                          opacity: activeIndex === index ? 1 : 0,
                          marginLeft: activeIndex === index ? 0 : "-3rem",
                        }}
                        transition={{ duration: 1, delay: 1.6 }}
                        exit={{ opacity: 0, marginLeft: "-3rem" }}
                        className="text-left text-3xl lg:text-[60px] mt-4 lg:mt-8"
                      >
                        {item.heading}
                      </motion.p>
                    </div>
                  </div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 2 }}
                    src={item.image}
                    alt=""
                    className="object-cover lg:object-center rounded-xl w-[100%] h-[100vh] lg:h-[80vh]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-center mt-10 mb-[10vh]">
            <div className="container">
              <div className="flex justify-center items-center lg:gap-[4rem] w-[100%] lg:mt-5 mb-[3rem] lg:mb-[6rem]">
                <div className="text-[#545454] text-center w-1/3">
                  <div className="text-2xl lg:text-[4rem] text-[#737373]">
                    <CountUp start={0} end={moment().year() - 2008} />
                  </div>
                  <p className="uppercase mt-2 lg:mt-10">Tahun</p>
                </div>
                <div className="text-[#545454] text-center w-1/3 border-l-2 border-r-2 border-[#737373]">
                  <div className="text-2xl lg:text-[4rem] text-[#737373]">
                    <CountUp 
                      start={0}
                      end={4948}
                      duration={2} separator=","
                    />
                  </div>
                  <p className="uppercase mt-2 lg:mt-10">Total Unit</p>
                </div>
                <div className="text-[#545454] text-center w-1/3">
                  <div className="text-2xl lg:text-[4rem] text-[#737373]">
                    <CountUp 
                      start={0}
                      end={5}
                      duration={2} separator=","
                    />
                  </div>
                  <p className="uppercase mt-2 lg:mt-10">Proyek</p>
                </div>
              </div>

              <Perumahan listAddress={listAddress} dataPerum={dataPerum} />

              <motion.div 
                initial={{ opacity: 0, x: '-5rem' }}
                whileInView={{ opacity: 1, x: '0' }}
                transition={{ duration: 1.4 }}
                viewport={{ once: true }}
                className='text-[30px] font-["Work-Sans-Bold"] tracking-[.04rem] mt-[10rem]'
              >
                FOLLOW SOCIAL MEDIA KAMI
              </motion.div>
              <div className="flex justify-center mt-2 mb-10">
                <motion.div 
                  initial={{ opacity: 0, x: '-5rem' }}
                  whileInView={{ opacity: 1, x: '0' }}
                  transition={{ duration: 1.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"
                ></motion.div>
              </div>
              <div className="flex justify-center gap-10 w-[100%] pt-8">
                {list_sosmed.map((item, key) => (
                  <a key={key} href={item.link} target="_blank">
                    <motion.img 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.5 * key }}
                      viewport={{ once: true }}
                      src={item.icon} 
                      alt="" 
                      className="h-20 object-contain" 
                    />
                  </a>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, x: '-5rem' }}
                whileInView={{ opacity: 1, x: '0' }}
                transition={{ duration: 1.4 }}
                viewport={{ once: true }}
                className='text-[30px] font-["Work-Sans-Bold"] tracking-[.04rem] mt-[10rem]'
              >
                PENGHARGAAN
              </motion.div>
              <div className="flex justify-center mt-2 mb-2">
                <motion.div 
                  initial={{ opacity: 0, x: '-5rem' }}
                  whileInView={{ opacity: 1, x: '0' }}
                  transition={{ duration: 1.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="border-t-[5px] border-[#dbbc42] w-[26%] rounded-full"></motion.div>
              </div>
              <div className="flex flex-wrap justify-center gap-5 w-[100%] pt-8">
                <PhotoProvider>
                  {list_achiev.map(
                    (item, index) =>
                      item.is_highlight === true && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1, delay: 0.5 * index }}
                          viewport={{ once: true }}
                          key={index}
                          className="border-2 border-[#dbbc42] cursor-pointer"
                        >
                          <PhotoView key={index} src={item.image}>
                            <img
                              src={item.image}
                              alt=""
                              className="h-auto lg:h-48 object-contain"
                            />
                          </PhotoView>
                        </motion.div>
                      )
                  )}
                </PhotoProvider>
              </div>
            </div>
          </div>

        </div>
      :
        <Loading />
      }
    </>
  );
};

export default Home;
