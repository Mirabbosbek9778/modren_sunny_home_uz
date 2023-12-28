import TextProduct from "../../../assets/text/TextProduct";
import { useParams } from "react-router-dom";
import SingleCard from "../../../components/generic/singleCard/SingleCard";
import { useGlobalContext } from "../../../context/Coin";
import Modal from "../../../components/modal/Modal";
import Social from "../../../components/social/Social";
import Project from "../../../components/project/Project";
import Xonsulting from "../../../components/xonsulting/Xonsulting";

const Detail = () => {
  const { id } = useParams();
  const { productCard } = useGlobalContext();

  const filteredItem = productCard?.filter((item) => String(item?.id) === id);

  return (
    <div className="flex flex-col">
      <TextProduct
        title="Проект (2+1) 70м2"
        name="Продукты - Жилые комплексы"
      />
      {filteredItem?.map((value) => (
        <SingleCard key={value?.id} data={value} item />
      ))}
      <Modal />
      <div className="top">
        <Social />
      </div>
      <Project />
      <Xonsulting />
    </div>
  );
};

export default Detail;
