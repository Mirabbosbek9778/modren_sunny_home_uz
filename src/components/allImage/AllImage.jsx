import { Container, Wrapper } from "../body/style";
import Card from "../generic/card/Card";
import AllIn1 from "../../assets/img/allIn1.png";
import AllIn2 from "../../assets/img/allIn2.png";
import AllIn3 from "../../assets/img/allIn3.png";
import AllIn4 from "../../assets/img/allIn4.png";
import AllIn5 from "../../assets/img/allIn5.png";
import AllIn6 from "../../assets/img/allIn6.png";
import AllIn7 from "../../assets/img/allIn7.png";
import AllIn8 from "../../assets/img/allIn8.png";
import AllIn9 from "../../assets/img/allIn9.png";
import AllIn10 from "../../assets/img/allIn10.png";
import AllIn11 from "../../assets/img/allIn11.png";
import AllIn12 from "../../assets/img/allIn12.png";
import AllIn13 from "../../assets/img/allIn13.png";
import AllIn14 from "../../assets/img/allIn14.png";
import AllIn15 from "../../assets/img/allIn15.png";

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
