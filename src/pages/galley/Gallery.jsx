import BoxGalleru from "../../components/boxGallery/BoxGalleru";
import BoxItem from "../../components/boxGallery/Item/BoxItem";
import Gen from "../../components/general/gen/Gen";

const Gallery = () => {
  return (
    <div className="flex flex-col">
      <BoxGalleru />
      <BoxItem />
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
