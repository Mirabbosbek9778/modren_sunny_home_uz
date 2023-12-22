/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Plus } from "../../assets";
import { Img } from "../contacts/style";
import { ProductCard } from "../navbar/style";
import { Texts } from "../products/style";

const Detail = ({ icon, title, onclick, details }) => {
  return (
    <div>
      <ProductCard onClick={onclick}>
        <Texts>{title}</Texts>
        <Img src={icon} alt="icon" details />
        <div>
          <img
            src={Plus}
            alt="Plus"
            className="absolute bottom-[1px] left-[579px]"
          />
        </div>
      </ProductCard>
    </div>
  );
};

export default Detail;
