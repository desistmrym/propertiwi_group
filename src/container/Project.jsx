import { useEffect, useState } from "react";
import CoverHeader from "../component/cover_header";
import Perumahan from "../component/perumahan";
import Loading from "../component/loading";
import { getProject } from "../api/project";
import { getBanner } from "../api/information";

const Project = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [banner, setBanner] = useState({});
  const [listAddress, setListAddress] = useState([]);
  const [dataPerum, setDataPerum] = useState([]);

  useEffect(() => {
    setIsLoad(true);
    handleData();
  }, []);

  const handleData = async () => {
    await handleBanner();
    await handlePerum();
    setIsLoad(false)
  }

  const handleBanner = async () => {
    const result = await getBanner()
    try {
      if (result.length > 0) {
        const banner_proyek = result.filter(a => a.acf.page_name === 'Proyek')[0];
        setBanner(banner_proyek)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handlePerum = async () => {
    const result = await getProject();
    try {
      const filterAddress = [
        ...new Set(result.map((item) => item.acf.location.name)),
      ];
      setDataPerum(result);
      setListAddress(filterAddress);
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div>
      {!isLoad ? (
        <>
          <CoverHeader type="header" data={banner} />
          <div className="flex justify-center my-5 lg:my-10">
            <div className="container">
              {dataPerum.length > 0 ? 
                <Perumahan listAddress={listAddress} dataPerum={dataPerum} />
              : null}
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
