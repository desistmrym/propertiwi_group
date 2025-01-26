import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const Perumahan = ({ listAddress, dataPerum }) => {
  const navigate = useNavigate()
  const [data_perum, set_data_perum] = useState([]);
  const [isPerum, setIsPerum] = useState("Tangerang");

  useEffect(() => {
    if (listAddress.length > 0) {
      handlePerum(isPerum);
    }
  }, []);

  const handlePerum = async (type) => {
    const filter = dataPerum.filter(item => item.acf.location.name === type);
    set_data_perum(filter);
    setIsPerum(type);
  };

  return (
    <div className="flex justify-center items-start">
      <div>
        <motion.div 
          initial={{ opacity: 0, x: '-5rem' }}
          whileInView={{ opacity: 1, x: '0' }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className='text-[30px] font-["Work-Sans-Bold"] tracking-[.04rem]'
        >
          PROYEK PERUMAHAN
        </motion.div>
        <div className="flex justify-center mt-2">
          <motion.div 
            initial={{ opacity: 0, x: '-5rem' }}
            whileInView={{ opacity: 1, x: '0' }}
            transition={{ duration: 1.4, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t-[5px] border-[#dbbc42] w-[20%] rounded-full"
          ></motion.div>
        </div>
        <div className="flex justify-center my-10 gap-5 overflow-x-scroll scrollbar-hidden">
          {listAddress.length > 0 && listAddress.map((item, key) => 
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.2 * key }}
              viewport={{ once: true }}
              className={`${
                isPerum === item
                  ? "bg-[#dbbc42]"
                  : "bg-[#d9d9d9] text-[#737373]"
              } py-2 px-5 rounded-full cursor-pointer`}
              onClick={() => handlePerum(item)}
            >
              {item}
            </motion.div>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 lg:py-8">
          {data_perum.length > 0 &&
            data_perum.map((item, x) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 * x }}
                viewport={{ once: true }}
                key={x}
                className="group rounded-xl cursor-pointer"
                onClick={() => navigate('/proyek/' + item.slug)}
                style={{
                  boxShadow:
                    'rgba(149, 157, 165, 0.7) 0px 8px 24px',
                }}
              >
                <div className="relative">
                  {item.acf.project_status.value !== 'sold_out' ? (
                    // <img
                    //   src={subsidi}
                    //   alt="subsidi"
                    //   className="absolute -left-[.1rem] z-[1] top-6 m-auto h-[5vh] lg:h-[6vh]"
                    // />
                    <div className="absolute z-[1] top-6 m-auto h-[5vh] lg:h-[7vh] w-[60%]">
                      <div className="bg-[#d0140b] py-2 px-5 text-left text-white font-['Eastman-Grotesque-Bold'] text-[18px] lg:text-[1.5rem] rounded-r-lg">
                        {item.acf.project_status.label}
                      </div>
                    </div>
                  ) : (
                    <div className="absolute z-[1] top-6 m-auto h-[5vh] lg:h-[7vh] w-[40%]">
                      <div className="bg-[#5554fe] py-2 px-5 text-left text-white font-['Eastman-Grotesque-Bold'] text-[18px] lg:text-[1.5rem] rounded-r-lg">
                        {item.acf.project_status.label}
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative">
                  {item.acf.image_banner.length > 0 &&
                    <img
                      src={item.acf.image_banner[0].url}
                      alt=""
                      className="w-full h-80 rounded-xl"
                    />
                  }
                  <div className="absolute bottom-0 bg-[#d9d9d9]/80 py-1 px-4 rounded-xl w-[100%]">
                    <p className="text-white text-shadow text-[1.5rem] font-['Eastman-Grotesque-Bold']">
                      {item.acf.name}
                    </p>
                  </div>
                  {/* Efek hover */}
                  <div className="absolute rounded-xl inset-0 z-[10] bg-black/[76%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white py-10 px-8 text-left">
                    <p
                      className="text-white lg:text-2xl font-['Work-Sans-Bold']"
                    >
                      {item.acf.name}
                    </p>
                    <p className="text-[12px] py-1 text-[#dbbc42]">
                      {item.acf.alamat}
                    </p>
                    <p className="py-3 text-[13px]" dangerouslySetInnerHTML={{ __html: item.acf.description.substring(0, 250) +'...' }}></p>
                    <p className="py-3 text-[#dbbc42] font-['Work-Sans-Italic']">
                      Lihat Detail...
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Perumahan;
