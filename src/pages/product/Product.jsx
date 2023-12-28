import Gen from "../../components/general/gen/Gen";
import NewsCard from "../../components/generic/newsCard/NewsCard";
import Modal from "../../components/modal/Modal";
import Social from "../../components/social/Social";
import { useNavigate } from "react-router-dom";
import TextProduct from "../../assets/text/TextProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "../../components/detail/styel";
import DetailComponent from "../../components/detail/Detail";

const Product = () => {
  const navigate = useNavigate();
  const [productCard, setProductCard] = useState([]);
  const [newCard, setNewsCard] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.mshome.uz/api/products/");
        setProductCard(response?.data);
      } catch (error) {
        console.error("There was a problem with the Axios request:", error);
      }
    };
    const getNews = async () => {
      try {
        const response = await axios.get("https://api.mshome.uz/api/news/");
        setNewsCard(response?.data);
      } catch (error) {
        console.error("There was a problem with the Axios request:", error);
      }
    };
    getNews();
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center bg-[#F0F2F4]">
      <TextProduct
        title="Жилые комплексы"
        name={"Продукты - Жилые комплексы"}
      />
      <Box>
        {productCard?.map((item) => (
          <>
            <DetailComponent
              details="true"
              onclick={() => navigate(`/product/detailed/${item?.id}`)}
              key={item?.id}
              data={item}
            />
          </>
        ))}
      </Box>
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
            {newCard?.map((item) => (
              <NewsCard key={item?.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
