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
            <img src={AllIn1} alt="AllIn1" />
            <img src={AllIn2} alt="AllIn1" />
            <img src={AllIn3} alt="AllIn1" />
            <img src={AllIn4} alt="AllIn1" />
          </div>
          <div className="flex gap-1">
            <img src={AllIn5} alt="AllIn1" />
            <img src={AllIn6} alt="AllIn1" />
            <img src={AllIn7} alt="AllIn1" />
            <img src={AllIn8} alt="AllIn1" />
          </div>
          <div className="flex gap-1">
            <img src={AllIn9} alt="AllIn1" />
            <img src={AllIn10} alt="AllIn1" />
            <img src={AllIn11} alt="AllIn1" />
            <img src={AllIn12} alt="AllIn1" />
          </div>
          <div className="flex gap-1">
            <img src={AllIn13} alt="AllIn1" />
            <img src={AllIn14} alt="AllIn1" />
            <img src={AllIn15} alt="AllIn1" />
            <Card
              description="Нажмите кнопку чтобы перейти на страницу “Все проекты информации о наших дома”"
              title="Все проекты"
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default AllImage;
