import GalleryItem from "../../components/gallery/Item/GalleryItem";
import Galler from "../../components/gallery/gallery";
import Gen from "../../components/general/gen/Gen";

const Gallery = () => {
  return (
    <div className="flex flex-col">
      <Galler />
      <GalleryItem />
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
