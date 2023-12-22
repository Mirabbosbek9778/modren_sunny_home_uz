import { H1Text, ONas, PText, Wrapper } from "../style";
import { House1, House2, House3, House4, House5 } from "../../../assets";
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
          <img src={House1} alt="House1" />
          <img src={House2} alt="House1" />
          <img src={House3} alt="House1" />
          <img src={House4} alt="House1" />
          <img src={House5} alt="House1" />
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
