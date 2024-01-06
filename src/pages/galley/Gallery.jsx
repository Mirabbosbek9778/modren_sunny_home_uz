import { Wrap } from "../../components/boxGallery/Item/style";
import { Spin } from "antd";
import { useGlobalContext } from "../../context/Coin";
import { BoxGalleru, BoxItem, Gen, NewsCard } from "../../components";

const Gallery = () => {
  const { dataGallery, isLoading, newCard } = useGlobalContext();

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
        {newCard?.map((item) => (
          <NewsCard key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
