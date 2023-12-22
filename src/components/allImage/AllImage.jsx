import {
  AllIn1,
  AllIn10,
  AllIn11,
  AllIn12,
  AllIn13,
  AllIn14,
  AllIn15,
  AllIn2,
  AllIn3,
  AllIn4,
  AllIn5,
  AllIn6,
  AllIn7,
  AllIn8,
  AllIn9,
} from "../../assets";
import { Container, Wrapper } from "../body/style";
import Card from "../generic/card/Card";

const AllImage = () => {
  return (
    <Wrapper>
      <Container>
        <div className="cursor-pointer">
          <div className="flex gap-1">
            <img src={AllIn1} alt="" />
            <img src={AllIn2} alt="" />
            <img src={AllIn3} alt="" />
            <img src={AllIn4} alt="" />
          </div>
          <div className="flex gap-1">
            <img src={AllIn5} alt="" />
            <img src={AllIn6} alt="" />
            <img src={AllIn7} alt="" />
            <img src={AllIn8} alt="" />
          </div>
          <div className="flex gap-1">
            <img src={AllIn9} alt="" />
            <img src={AllIn10} alt="" />
            <img src={AllIn11} alt="" />
            <img src={AllIn12} alt="" />
          </div>
          <div className="flex gap-1">
            <img src={AllIn13} alt="" />
            <img src={AllIn14} alt="" />
            <img src={AllIn15} alt="" />
            <Card
              description="Нажмите кнопку чтобы перейти на страницу “Все проекты”"
              title="Все проекты"
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default AllImage;
