/* eslint-disable react/prop-types */
import { Plus } from "../../assets";
import { ProductCard } from "../navbar/style";
import { Texts } from "../products/style";

const Detail = ({ icon, title, onclick }) => {
  return (
    <ProductCard onClick={onclick}>
      <Texts>{title}</Texts>
      <div>
        <img src={icon} alt="" className="w-[681px] h-[400px] rounded-[24px]" />
      </div>
      <div className="border">
        <img
          src={Plus}
          alt=""
          className="absolute  bottom-[2px] left-[579px]"
        />
      </div>
    </ProductCard>
  );
};

export default Detail;
