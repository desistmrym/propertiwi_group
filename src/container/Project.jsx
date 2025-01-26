import { useEffect, useState } from "react";
import CoverHeader from "../component/cover_header";
import Perumahan from "../component/perumahan";
import Loading from "../component/loading";
import { getProject } from "../api/project";

const Project = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [listAddress, setListAddress] = useState([]);
  const [dataPerum, setDataPerum] = useState([]);

  useEffect(() => {
    setIsLoad(true);
    handlePerum();
  }, []);

  const handlePerum = async () => {
    const result = await getProject();
    try {
      const filterAddress = [
        ...new Set(result.map((item) => item.acf.location.name)),
      ];
      setDataPerum(result);
      setListAddress(filterAddress);
      setIsLoad(false);
    } catch (err) {
      setIsLoad(false);
    }
  };
  return (
    <div>
      {!isLoad ? (
        <>
          <CoverHeader type="header" />
          <div className="flex justify-center my-5 lg:my-10">
            <div className="container">
              <Perumahan listAddress={listAddress} dataPerum={dataPerum} />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Project;
