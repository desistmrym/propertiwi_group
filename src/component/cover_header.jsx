import { header } from "../assets/list_image";

const CoverHeader = () => {
    return (
        <img src={header} alt="" className="object-cover w-[100%] h-[100%] mt-16 lg:mt-0 lg:h-[60vh]" />
    )
}

export default CoverHeader;