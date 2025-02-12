import { header, header_1 } from "../assets/list_image";

const CoverHeader = ({type, data}) => {
    const img = type === 'header_1' ? header_1 : data && "acf" in data &&  data.acf.header_images.length > 0 ? data.acf.header_images[0].url : header 
    return (
        <div className="relative flex items-center">
            <img src={img} alt="" className={`object-center w-[100%] h-[100%] pt-[4rem] lg:pt-0 ${type === 'header_1' ? 'lg:-mt-2' : 'lg:mt-0'} lg:h-[70vh]`} />
            {/* {type === 'header_1' ?
                <div className="absolute lg:top-0 z-[8] px-5 lg:px-[4rem] pt-[4rem] lg:pt-[5rem] lg:py-8 flex items-center">
                    <div className="text-white">
                        <p className="text-[1rem] lg:text-[3.5rem] font-bold font-['Inter']">Ayo Gabung!</p>
                        <p className="text-[.6rem] lg:text-[2.6rem] font-['Inter']">Menjadi bagian Team Propertiwi Group</p>

                        <div className="py-5 lg:py-10">
                            <p class="text-[.5rem] lg:text-[1.5rem]">Send your CV to:</p>
                            <p class="text-[.5rem] lg:text-[1.5rem]">Propertiwi.group@gmail.com</p>
                        </div>
                    </div>
                </div>
            : null } */}
        </div>
    )
}

export default CoverHeader;