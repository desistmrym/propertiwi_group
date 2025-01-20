import Header from './layouts/header'
import './App.css'; 
import { cover, p_1, p_2, list_sosmed, list_perum, list_achiev, subsidi } from './assets/list_image';
import Footer from './layouts/footer';
import { useEffect } from 'react';
import { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  const [data_perum, set_data_perum] = useState([]);
  const [isPerum, setIsPerum] = useState('Tangerang')

  useEffect(() => {
    handlePerum('Tangerang')
  }, [])
  
  const handlePerum = (type) => {
    const filtered = list_perum.filter(item => item.address === type);
    set_data_perum(filtered)
    setIsPerum(type)
  } 

  return (
    <>
      <Header />

        <div className='relative -mt-[16%] w-full'>
          <img src={cover} alt="cover" className='object-cover w-full h-[50vh] lg:h-auto' />
        </div>
        <div className="flex justify-center mt-10 mb-[10vh]">
          <div className="container">
            <div className="flex justify-center items-start">
              <div>
                <div className='text-[30px] font-["Work-Sans-Bold"] tracking-[.04rem]'>PROYEK PERUMAHAN</div>
                <div className="flex justify-center mt-2">
                  <div className='border-t-[5px] border-[#dbbc42] w-[20%] rounded-full'></div>
                </div>
                <div className="flex justify-center my-10 gap-5 overflow-x-scroll scrollbar-hidden">
                  <div className={`${isPerum === "Tangerang" ? 'bg-[#dbbc42]' : 'bg-[#d9d9d9] text-[#737373]'} py-2 px-5 rounded-full cursor-pointer`} onClick={() => handlePerum('Tangerang')}>Tangerang</div>
                  <div className={`${isPerum === "Bogor" ? 'bg-[#dbbc42]' : 'bg-[#d9d9d9] text-[#737373]'} py-2 px-5 rounded-full cursor-pointer`} onClick={() => handlePerum('Bogor')}>Bogor</div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
                {data_perum.length > 0 && data_perum.map((item, x) => 
                  <div key={x} className="border-2 border-black rounded-xl">
                    <div className='relative'>
                      {item.marker === 'subsidi' ? 
                        <img src={subsidi} alt="subsidi" className='absolute -left-1 z-[1] top-6 m-auto h-[5vh] lg:h-[6vh]' />
                      :
                        <div className='absolute z-[1] top-6 m-auto h-[5vh] lg:h-[7vh] w-[40%]'>
                          <div className='bg-[#5554fe] py-2 px-5 text-left text-white font-["Eastman-Grotesque-Bold"] text-[18px] lg:text-[1.5rem]'>
                            {item.marker}
                          </div>
                        </div>
                      }
                    </div>
                    <div className="relative">
                      <img src={item.image} alt="" className='w-full h-80 rounded-xl' />
                    </div>
                    <div className="relative bg-[#d9d9d9] py-1 px-4 rounded-xl -mt-[1rem]">
                      <p className='text-white text-shadow text-[1.5rem] font-["Eastman-Grotesque-Bold"]'>{item.name}</p>
                    </div>
                  </div>
                )}
                </div>
              </div>
            </div>


            <div className='text-[30px] font-["Work-Sans-Bold"] tracking-[.04rem] mt-[10rem]'>FOLLOW SOCIAL MEDIA KAMI</div>
            <div className="flex justify-center mt-2 mb-10">
              <div className='border-t-[5px] border-[#dbbc42] w-[30%] rounded-full'></div>
            </div>
            <div className='flex justify-center gap-10 w-[100%] pt-8'>
              {list_sosmed.map((item, key) => 
                  <a key={key} href={item.link} target="_blank">
                      <img src={item.icon} alt='' className='h-20 object-contain' />
                  </a>
              )}
            </div>
            

            <div className='text-[30px] font-["Work-Sans-Bold"] tracking-[.04rem] mt-[10rem]'>PENGHARGAAN</div>
            <div className="flex justify-center mt-2 mb-2">
              <div className='border-t-[5px] border-[#dbbc42] w-[26%] rounded-full'></div>
            </div>
            <div className='flex flex-wrap justify-center gap-5 w-[100%] pt-8'>
              <PhotoProvider>
                  {list_achiev.map((item, index) => 
                    item.is_highlight === true &&
                    (
                      <div className="border-2 border-[#dbbc42] cursor-pointer">
                          <PhotoView key={index} src={item.image}>
                            <img src={item.image} alt="" className='h-auto lg:h-48 object-contain' />
                          </PhotoView>
                      </div>
                  ))}
              </PhotoProvider>
                {/* <div className="border-2 border-[#dbbc42]">
                  <img src={p_1} alt='' className='h-48 object-contain' />
                </div>
                <div className="border-2 border-[#dbbc42]">
                  <img src={p_2} alt='' className='h-48 object-contain' />
                </div> */}
            </div>
          </div>
        </div>
      
      <Footer />
      
    </>
  )
}

export default App
