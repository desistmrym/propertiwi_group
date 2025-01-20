import Header from './layouts/header'
import './App.css'; 
import { cover, tg_1, tg_2, facebook, tiktok, youtube, instagram, p_1, p_2, list_sosmed, list_perum } from './assets/list_image';
import Footer from './layouts/footer';
import { useEffect } from 'react';
import { useState } from 'react';

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
          <img src={cover} alt="cover" className='object-cover w-full' />
        </div>
        <div className="flex justify-center mt-10 mb-[10vh]">
          <div className="container">
            <div className='text-[30px] font-["Work-Sans-Bold"] tracking-[.04rem]'>PROYEK PERUMAHAN</div>
            <div className="flex justify-center mt-2">
              <div className='border-t-[5px] border-[#dbbc42] w-[20%] rounded-full'></div>
            </div>
            <div className="flex justify-center my-5 gap-5">
              <div className={`${isPerum === "Tangerang" ? 'bg-[#dbbc42]' : 'bg-[#d9d9d9] text-[#737373]'} py-2 px-5 rounded-full cursor-pointer`} onClick={() => handlePerum('Tangerang')}>Tangerang</div>
              <div className={`${isPerum === "Bogor" ? 'bg-[#dbbc42]' : 'bg-[#d9d9d9] text-[#737373]'} py-2 px-5 rounded-full cursor-pointer`} onClick={() => handlePerum('Bogor')}>Bogor</div>
            </div>
            <div className="grid grid-cols-3 gap-5 my-5">
              {data_perum.length > 0 && data_perum.map((item, x) => 
                <div key={x} className="border-2 border-black rounded-xl">
                  <img src={item.image} alt="" className='w-full h-80 rounded-xl' />
                  <div className="relative bg-[#d9d9d9] py-1 px-4 rounded-xl -mt-[1rem]">
                    <p className='text-white text-[2rem]'>{item.name}</p>
                  </div>
                </div>
              )}
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
            <div className='flex justify-center gap-10 w-[100%] pt-8'>
                <div className="border-2 border-[#dbbc42]">
                  <img src={p_1} alt='' className='h-48 object-contain' />
                </div>
                <div className="border-2 border-[#dbbc42]">
                  <img src={p_2} alt='' className='h-48 object-contain' />
                </div>
            </div>
          </div>
        </div>
      
      <Footer />
      
    </>
  )
}

export default App
