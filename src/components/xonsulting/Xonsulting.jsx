import { ONas } from "../body/style";
import Card from "../generic/card/Card";
import { HidenText } from "../generic/cards/style";
import { Wrapper } from "../questions/style";
import Foot1 from "../../assets/img/foot1.png";
import Foot2 from "../../assets/img/foot2.png";
import Foot3 from "../../assets/img/foot3.png";
import Foot4 from "../../assets/img/foot4.png";
import Foot5 from "../../assets/img/foot5.png";
import Foot6 from "../../assets/img/foot6.png";
import Foot7 from "../../assets/img/foot7.png";
import Foot8 from "../../assets/img/foot8.png";
import { Container, Text } from "./style";

const Xonsulting = () => {
  return (
    <Wrapper>
      <Container>
        <div className="flex flex-col gap-6">
          <ONas>Консультация</ONas>
          <Text>Если у вас появились вопросы, запишитесь на консультацию</Text>
          <HidenText className="w-[415px]">
            Наши сотрудники позвонят вам в течение 48 часов и ответят на все
            ваши вопросы
          </HidenText>
        </div>
        <div className="flex flex-wrap gap-[5px]">
          <div className="flex w-full justify-end pr-14 gap-1">
            <Card
              description="Записаться на бесплатную консультацию"
              title="Получить консультацию"
            />
            <img src={Foot1} alt="" />
          </div>
          <div className="flex justify-end w-full pr-14 gap-1">
            <img src={Foot3} alt="" />
            <img src={Foot2} alt="" />
            <img src={Foot4} alt="" />
          </div>
          <div className="flex gap-1 justify-end">
            <img src={Foot5} alt="" />
            <img src={Foot7} alt="" />
            <img src={Foot8} alt="" />
            <img src={Foot6} alt="" />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Xonsulting;
