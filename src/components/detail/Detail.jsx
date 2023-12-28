/* eslint-disable react/prop-types */
import { Plus } from "../../assets";
import { Container } from "../boxGallery/Item/style";
import { Texts } from "../products/style";
import { DetailImg } from "./styel";

const Detail = ({ data }) => {
  const { img, subtitle } = data;

  return (
    <div className="max:w-[681px] max:h-[400px] rounded-3xl">
      <Container>
        <Texts>{subtitle}</Texts>
        <DetailImg src={img} alt="icon" />
        <div>
          <img
            src={Plus}
            alt="Plus"
            className="absolute bottom-[1px] left-[579px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default Detail;
