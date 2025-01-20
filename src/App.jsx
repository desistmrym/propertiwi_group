import Header from './layouts/header'
import './App.css'; 
import { cover, tg_1, tg_2, facebook, tiktok, youtube, instagram, p_1, p_2, list_sosmed } from './assets/list_image';
import Footer from './layouts/footer';

function App() {

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
              <div className='bg-[#dbbc42] py-2 px-5 rounded-full'>Tangerang</div>
              <div className='bg-[#d9d9d9] py-2 px-5 rounded-full text-[#737373]'>Bogor</div>
            </div>
            <div className="flex justify-center my-5 gap-5">
              <div className="border-2 border-black rounded-xl">
                <img src={tg_1} alt="" className='w-full h-80 rounded-xl' />
                <div className="relative bg-[#d9d9d9] py-1 px-4 rounded-xl -mt-[1rem]">
                  <p className='text-white text-[2rem]'>Grand Village Sepatan</p>
                </div>
              </div>
              <div className="border-2 border-black rounded-xl">
                <img src={tg_2} alt="" className='w-full h-80 rounded-xl' />
                <div className="relative bg-[#d9d9d9] py-1 px-4 rounded-xl -mt-[1rem]">
                  <p className='text-white text-[2rem]'>Bayur Sarana Indah</p>
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
