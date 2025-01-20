import { useEffect, useState } from "react";
import {
  cover,
  list_sosmed,
  list_perum,
  list_achiev,
  subsidi,
} from "../assets/list_image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Perumahan from "../component/perumahan";

const Home = () => {
  return (
    <>
      <div className="relative -mt-[16%] w-full">
        <img
          src={cover}
          alt="cover"
          className="object-cover w-full h-[50vh] lg:h-auto"
        />
      </div>
      <div className="flex justify-center mt-10 mb-[10vh]">
        <div className="container">
          <Perumahan />

          <div className='text-[30px] font-["Work-Sans-Bold"] tracking-[.04rem] mt-[10rem]'>
            FOLLOW SOCIAL MEDIA KAMI
          </div>
          <div className="flex justify-center mt-2 mb-10">
            <div className="border-t-[5px] border-[#dbbc42] w-[30%] rounded-full"></div>
          </div>
          <div className="flex justify-center gap-10 w-[100%] pt-8">
            {list_sosmed.map((item, key) => (
              <a key={key} href={item.link} target="_blank">
                <img src={item.icon} alt="" className="h-20 object-contain" />
              </a>
            ))}
          </div>

          <div className='text-[30px] font-["Work-Sans-Bold"] tracking-[.04rem] mt-[10rem]'>
            PENGHARGAAN
          </div>
          <div className="flex justify-center mt-2 mb-2">
            <div className="border-t-[5px] border-[#dbbc42] w-[26%] rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-5 w-[100%] pt-8">
            <PhotoProvider>
              {list_achiev.map(
                (item, index) =>
                  item.is_highlight === true && (
                    <div key={index} className="border-2 border-[#dbbc42] cursor-pointer">
                      <PhotoView key={index} src={item.image}>
                        <img
                          src={item.image}
                          alt=""
                          className="h-auto lg:h-48 object-contain"
                        />
                      </PhotoView>
                    </div>
                  )
              )}
            </PhotoProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
