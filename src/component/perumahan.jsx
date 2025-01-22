import { useEffect, useState } from "react";
import {
    list_perum,
    subsidi,
  } from "../assets/list_image";
import { useNavigate } from "react-router-dom";

const Perumahan = () => {
  const navigate = useNavigate()
  const [data_perum, set_data_perum] = useState([]);
  const [isPerum, setIsPerum] = useState("Tangerang");

  useEffect(() => {
    handlePerum("Tangerang");
  }, []);

  const handlePerum = (type) => {
    const filtered = list_perum.filter((item) => item.address === type);
    set_data_perum(filtered);
    setIsPerum(type);
  };

  return (
    <div className="flex justify-center items-start">
      <div>
        <div className='text-[30px] font-["Work-Sans-Bold"] tracking-[.04rem]'>
          PROYEK PERUMAHAN
        </div>
        <div className="flex justify-center mt-2">
          <div className="border-t-[5px] border-[#dbbc42] w-[20%] rounded-full"></div>
        </div>
        <div className="flex justify-center my-10 gap-5 overflow-x-scroll scrollbar-hidden">
          <div
            className={`${
              isPerum === "Tangerang"
                ? "bg-[#dbbc42]"
                : "bg-[#d9d9d9] text-[#737373]"
            } py-2 px-5 rounded-full cursor-pointer`}
            onClick={() => handlePerum("Tangerang")}
          >
            Tangerang
          </div>
          <div
            className={`${
              isPerum === "Bogor"
                ? "bg-[#dbbc42]"
                : "bg-[#d9d9d9] text-[#737373]"
            } py-2 px-5 rounded-full cursor-pointer`}
            onClick={() => handlePerum("Bogor")}
          >
            Bogor
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 lg:py-8">
          {data_perum.length > 0 &&
            data_perum.map((item, x) => (
              <div key={x} className="border-2 border-black rounded-xl" onClick={() => navigate('/proyek/'+item.slug)}>
                <div className="relative">
                  {item.marker === "subsidi" ? (
                    <img
                      src={subsidi}
                      alt="subsidi"
                      className="absolute -left-1 z-[1] top-6 m-auto h-[5vh] lg:h-[6vh]"
                    />
                  ) : (
                    <div className="absolute z-[1] top-6 m-auto h-[5vh] lg:h-[7vh] w-[40%]">
                      <div className='bg-[#5554fe] py-2 px-5 text-left text-white font-["Eastman-Grotesque-Bold"] text-[18px] lg:text-[1.5rem]'>
                        {item.marker}
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-80 rounded-xl"
                  />
                </div>
                <div className="relative bg-[#d9d9d9] py-1 px-4 rounded-xl -mt-[1rem]">
                  <p className='text-white text-shadow text-[1.5rem] font-["Eastman-Grotesque-Bold"]'>
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Perumahan;
