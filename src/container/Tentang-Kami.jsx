import { list_about } from "../assets/list_data";
import { list_achiev, logo, why } from "../assets/list_image";
import CoverHeader from "../component/cover_header";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const About = () => {
  return (
    <div>
      <CoverHeader />

      <div className="my-5 lg:my-10 w-[100%] flex justify-center ">
        <div className="container">
          <div className='text-[30px] font-["Work-Sans-Bold"] text-[#545454]'>
            TENTANG KAMI
          </div>
          <div className="flex justify-center mt-2">
            <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
          </div>
          <div className="flex my-5 lg:my-10">
            <div className="w-1/3">
              <div className="flex justify-center">
                <img src={logo} alt="logo" />
              </div>
              <div className="text-xl font-['Work-Sans-Bold']">
                PROPERTIWI GROUP
              </div>
            </div>
            <div className="w-2/3 text-left">
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: list_about.description
                    .replace(/<p>/g, '<p class="mb-5">')
                    .replace(
                      /<span>/g,
                      `<span class="font-['Work-Sans-Bold']">`
                    ),
                }}
              ></div>
            </div>
          </div>

          <div className="mt-5 lg:mt-16">
            <div className='text-[30px] font-["Work-Sans-Bold"] text-[#545454]'>
              MENGAPA <span className="text-[#3033ac]">PROPERTIWI GROUP</span> ?
            </div>
            <div className="flex justify-center mt-2">
              <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
            </div>

            <div className="mt-5">
              <img src={why} alt="" />
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
                {list_achiev.map((item, index) => (
                  <div
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
                  </div>
                ))}
              </PhotoProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
