import { useEffect, useState } from "react";
import { list_about } from "../assets/list_data";
import { logo } from "../assets/list_image";
import CoverHeader from "../component/cover_header";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getAward, getBanner, getInformation, getParticipant } from "../api/information";
import Loading from "../component/loading";

const About = () => {
  const [banner, setBanner] = useState({})
  const [about, setAbout] = useState({});
  const [achiev, setAchiev] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true)
    handleData()
  }, [])

  const handleData =  async () => {
    await handleBanner();
    await handleInfo();
    await handleAchiev();
    setIsLoad(false);
  }

  const handleBanner = async () => {
    const result = await getBanner();
    try {
      if (result.length > 0) {
        const banner_proyek = result.filter(a => a.acf.page_name === 'Proyek')[0];
        setBanner(banner_proyek)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleInfo = async () => {
    const result = await getInformation();
    try {
      if (result.length > 0) {
        setAbout(result[0])
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleAchiev = async () => {
    try {
      const result = await getAward();
      const result_participant = await getParticipant()
      const all_data = [];
      if (result.length > 0) {
        result.forEach(item => {
          all_data.push({...item})
        })
      }

      if (result_participant.length > 0) {
        result_participant.forEach(item => {
          all_data.push({...item})
        })
      } 

      setAchiev(all_data)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!isLoad ? 
        <div>
          <CoverHeader type="header" data={banner} />

          <div className="my-5 lg:my-10 w-[100%] flex justify-center ">
            <div className="container">
              <div className='text-[30px] font-["Work-Sans-Bold"] text-[#545454]'>
                TENTANG KAMI
              </div>
              <div className="flex justify-center mt-2">
                <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap my-5 lg:my-10">
                <div className="w-[100%] lg:w-1/3">
                  <div className="flex justify-center">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="text-xl font-['Work-Sans-Bold'] text-[#3033ac]">
                    PROPERTIWI GROUP
                  </div>
                </div>
                <div className="w-[100%] lg:w-2/3 mt-5 lg:mt-0 text-left">
                  {about && "acf" in about ? 
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: about.acf.tentang_kami_text
                          .replace(/<p>/g, '<p class="mb-5">')
                          .replace(
                            /<span>/g,
                            `<span class="font-['Work-Sans-Bold']">`
                          ),
                      }}
                    ></div>
                  : null}
                </div>
              </div>

              <div className="my-5 lg:my-[10rem]">
                <div className='text-[26px] lg:text-[30px] font-["Work-Sans-Bold"] text-[#545454]'>
                  MENGAPA <span className="text-[#3033ac]">PROPERTIWI GROUP</span> ?
                </div>
                <div className="flex justify-center mt-2">
                  <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
                </div>

                <div className="mt-5">
                  {about && "acf" in about ? 
                    <div>
                      {about.acf.why_propertiwi_group.length > 0 ? 
                        <div>
                          <div className="grid grid-cols-1 lg:grid-cols-3 pt-10">
                              {about.acf.why_propertiwi_group.slice(0, 3).map((item, key) => 
                                <div key={key}>
                                  <div className="flex justify-center py-2">
                                    <img
                                      src={item.icon}
                                      alt=""
                                      className="w-16 h-16"
                                    />
                                  </div>
                                  <p className="py-3 text-sm">{item.icon_text}</p>
                                </div>
                              )}
                          </div>
                          
                          <div className='flex flex-wrap gap-6 items-center justify-center lg:pt-10'>
                            {about.acf.why_propertiwi_group.slice(3).length > 0 ? about.acf.why_propertiwi_group.slice(3).map((item, key) => 
                                <div key={key} className="flex-[0_0_100%] lg:flex-[0_0_20%]">
                                  <div className="flex flex-wrap justify-center py-2">
                                    <img
                                      src={item.icon}
                                      alt=""
                                      className="w-16 h-16"
                                    />
                                  </div>
                                  <p className="my-3 text-sm">{item.icon_text}</p>
                                </div>
                              )
                            : null}
                          </div>
                        </div>
                      : null}
                    </div>
                  : null}
                </div>
              </div>

              <div className="my-5 lg:my-10">
                <div className='text-[30px] font-["Work-Sans-Bold"] text-[#545454]'>
                  PENGHARGAAN & PARTISIPASI
                </div>
                <div className="flex justify-center mt-2">
                  <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-5 w-[100%] py-8">
                  <PhotoProvider>
                    {achiev.length > 0 ? achiev.map((item, index) => (
                      <div
                        key={index}
                        className="border-2 border-[#dbbc42] cursor-pointer"
                      >
                        <PhotoView key={index} src={item.acf.certificate}>
                          <img
                            src={item.acf.certificate}
                            alt=""
                            className="h-auto lg:h-48 object-contain"
                          />
                        </PhotoView>
                      </div>
                    )) : null}
                  </PhotoProvider>
                </div>
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

export default About;
