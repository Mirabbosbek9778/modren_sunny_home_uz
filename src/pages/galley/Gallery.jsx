import { useEffect, useState } from "react";
import BoxGalleru from "../../components/boxGallery/BoxGalleru";
import BoxItem from "../../components/boxGallery/Item/BoxItem";
import Gen from "../../components/general/gen/Gen";
import axios from "axios";
import { Wrap } from "../../components/boxGallery/Item/style";
import { Spin } from "antd";

const Gallery = () => {
  const [dataGallery, setDataGallery] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.mshome.uz/api/gallery/");
        setDataGallery(response?.data);
      } catch (error) {
        console.error("There was a problem with the Axios request:", error);
      } finally {
        setisLoading(false);
      }
    };
    getData();
  }, []);

  console.log(dataGallery, "1");
  return (
    <div className="flex flex-col bg-[#f0f2f4]">
      <BoxGalleru />
      <Wrap>
        {isLoading ? (
          <>
            <Spin />
          </>
        ) : (
          dataGallery?.map((item) => <BoxItem key={item?.i} data={item} />)
        )}
      </Wrap>
      <div className="mt-[-100px]">
        <Gen
          title="Новости компании"
          about=""
          description="Здесь должно быть короткий текс о новостях компании- 
             здесь будет отоброжаться толька 4 последних новостей остальные новости о компании будет в разделе Новости илил БЛОГ "
        />
      </div>
    </div>
  );
};

export default Gallery;
