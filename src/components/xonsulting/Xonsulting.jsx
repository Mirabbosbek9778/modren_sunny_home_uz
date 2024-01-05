import { ONas } from "../body/style";
import Card from "../generic/card/Card";
import { HidenText } from "../generic/cards/style";
import { Wrapper } from "../questions/style";
import { Container, Text } from "./style";
import {
  FootImg1,
  FootImg2,
  FootImg3,
  FootImg4,
  FootImg5,
  FootImg6,
  FootImg7,
  FootImg8,
} from "../../assets";
import { useTranslation } from "react-i18next";

const Xonsulting = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <div className="flex flex-col gap-6">
          <ONas>{t("xonsolting_title")}</ONas>
          <Text>{t("xonsolting_about")}</Text>
          <HidenText className="w-[415px]">{t("xonsolting_ques")}</HidenText>
        </div>
        <div className="flex flex-wrap gap-[5px]">
          <div className="flex w-full justify-end pr-14 gap-1">
            <Card
              description=" Основываясь на требованиях и потребностях клиента, создаем дичные решения."
              title="Получить консультацию"
            />
            <img src={FootImg1} alt="" />
          </div>
          <div className="flex justify-end w-full pr-14 gap-1">
            <img src={FootImg2} alt="" />
            <img src={FootImg3} alt="" />
            <img src={FootImg4} alt="" />
          </div>
          <div className="flex gap-1 justify-end">
            <img src={FootImg5} alt="" />
            <img src={FootImg6} alt="" />
            <img src={FootImg7} alt="" />
            <img src={FootImg8} alt="" />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Xonsulting;
