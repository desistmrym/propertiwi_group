import { header, header_1 } from "../assets/list_image";

const CoverHeader = ({type, data}) => {
    const img = type === 'header_1' ? header_1 : data && "acf" in data &&  data.acf.header_images.length > 0 ? data.acf.header_images[0].url : header 
    return (
        <img src={img} alt="" className={`object-cover w-[100%] h-[100%] pt-[4rem] lg:pt-0 ${type === 'header_1' ? 'lg:-mt-2' : 'lg:mt-0'} lg:h-[70vh]`} />
    )
}

export default CoverHeader;