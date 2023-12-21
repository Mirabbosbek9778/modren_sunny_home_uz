import Detail from "../../components/detail/Detail";
import Gen from "../../components/general/gen/Gen";
import Modal from "../../components/modal/Modal";
import Social from "../../components/social/Social";

const Product = () => {
  return (
    <div className="flex flex-col">
      <Detail />
      <div className="flex flex-col">
        <Modal />
        <div className="mt-[-143px]">
          <Social />
        </div>
        <div className="mt-[-100px]">
          <Gen
            title="Новости компании"
            description="Здесь должно быть короткий текс о новостях компании- 
              здесь будет отоброжаться толька 4 последних новостей остальные новости о компании будет в разделе Новости илил БЛОГ "
            about=""
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
