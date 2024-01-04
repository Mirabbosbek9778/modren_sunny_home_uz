import BoxGalleru from "../../components/boxGallery/BoxGalleru";
import BoxItem from "../../components/boxGallery/Item/BoxItem";
import Gen from "../../components/general/gen/Gen";
import { Wrap } from "../../components/boxGallery/Item/style";
import { Spin } from "antd";
import { useGlobalContext } from "../../context/Coin";

const Gallery = () => {
  const { dataGallery, isLoading } = useGlobalContext();

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
