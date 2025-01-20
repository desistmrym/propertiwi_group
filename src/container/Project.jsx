import CoverHeader from "../component/cover_header";
import Perumahan from "../component/perumahan";

const Project = () => {
    return (
        <div>
            <CoverHeader />
            <div className="flex justify-center my-5 lg:my-10">
                <div className="container">
                    <Perumahan />
                </div>

            </div>
        </div>
    )
}

export default Project;