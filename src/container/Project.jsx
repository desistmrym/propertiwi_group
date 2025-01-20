import { header } from "../assets/list_image";
import Perumahan from "../component/perumahan";

const Project = () => {
    return (
        <div>
            <img src={header} alt="" className="object-cover w-[100%] h-[60vh]" />
            <div className="flex justify-center my-5 lg:my-10">
                <div className="container">
                    <Perumahan />
                </div>

            </div>
        </div>
    )
}

export default Project;