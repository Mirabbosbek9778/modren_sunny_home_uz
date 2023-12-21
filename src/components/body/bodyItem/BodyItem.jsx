import { H1Text, ONas, PText, Wrapper } from "../style";
import House1 from "../../../assets/img/house1.png";
import House2 from "../../../assets/img/house2.png";
import House3 from "../../../assets/img/house3.png";
import House4 from "../../../assets/img/house4.png";
import House5 from "../../../assets/img/house5.png";
import Card from "../../generic/card/Card";

const BodyItem = () => {
  return (
    <Wrapper className="bg-[#f0f2f4] flex justify-center">
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-6">
          <ONas>О нас</ONas>
          <H1Text>Строим современные и экологичные дома от 7 дней</H1Text>
          <PText>
            - Наша компания специализируется на производстве и строительстве
            модульных домов легкой инструкции, доступных по цене и производимые
            в короткие сроки.
          </PText>
        </div>
        <div className="flex flex-wrap w-[746px] gap-1">
          <img src={House1} alt="" />
          <img src={House2} alt="" />
          <img src={House3} alt="" />
          <img src={House4} alt="" />
          <img src={House5} alt="" />
          <Card
            description="Для получения более подробной информации о наших дома свяжитесь с нами!"
            title="Связаться с нами"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default BodyItem;
