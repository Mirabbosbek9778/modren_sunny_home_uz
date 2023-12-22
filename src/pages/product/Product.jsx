import Detail from "../../components/detail/Detail";
import Gen from "../../components/general/gen/Gen";
import NewsCard from "../../components/generic/newsCard/NewsCard";
import Modal from "../../components/modal/Modal";
import Social from "../../components/social/Social";
import { dataNews } from "../../mock/dataNews";
import { useNavigate } from "react-router-dom";
import TextProduct from "../../assets/text/TextProduct";
import { productCard } from "../../mock/productHouse";

const Product = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center">
      <TextProduct
        title="Жилые комплексы"
        name={"Продукты - Жилые комплексы"}
      />
      <div className="flex flex-wrap gap-1 bg-[#f0f2f4] pb-[150px] justify-center">
        {productCard.map((item) => (
          <Detail
            details="true"
            onclick={() => navigate(`/product/detailed/${item?.id}`)}
            key={item?.id}
            {...item}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <Modal />
        <div className="mt-[-143px]">
          <Social />
        </div>
        <div className="mt-[-100px] flex flex-col">
          <Gen
            title="Новости компании"
            description="Здесь должно быть короткий текс о новостях компании- 
              здесь будет отоброжаться толька 4 последних новостей остальные новости о компании будет в разделе Новости илил БЛОГ "
            about=""
          />
          <div className="flex justify-center gap-1 bg-[#f0f2f4] pb-[150px]">
            {dataNews.map((item) => (
              <NewsCard key={item?.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
