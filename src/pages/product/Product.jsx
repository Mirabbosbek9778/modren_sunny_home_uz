import Detail from "../../components/detail/Detail";
import Gen from "../../components/general/gen/Gen";
import NewsCard from "../../components/generic/newsCard/NewsCard";
import Modal from "../../components/modal/Modal";
import Social from "../../components/social/Social";
import { dataNews } from "../../mock/dataNews";
import { useNavigate } from "react-router-dom";
import TextProduct from "../../assets/text/TextProduct";
import { useEffect, useState } from "react";

const Product = () => {
  const navigate = useNavigate();
  const [itemProduct, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://api.mshome.uz/api/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("net response");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProduct(data);
        } else {
          throw new Error("data format not supported");
        }
      })
      .catch((error) => {
        console.error("hato", error);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <TextProduct />
      {itemProduct.map((item) => (
        <Detail
          onclick={() => navigate(`/product/detailed/${item?.id}`)}
          key={item?.id}
          {...item}
        />
      ))}
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
          {dataNews.map((item) => (
            <NewsCard key={item?.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
