import { BigText, Box, Container, Content, SmallText, Wrapper } from "./style";
import Card from "../generic/card/Card";
import { dataBody } from "../../mock/dataBody";
import { useTranslation } from "react-i18next";

const Body = () => {
  const { t } = useTranslation();
  console.log(t("body_about"));

  return (
    <Wrapper>
      <Container>
        <Content>
          <BigText>{t("body_about")}</BigText>
          <SmallText>{t("body_description")}</SmallText>
        </Content>
        <Box>
          <Card
            title="Получить каталог"
            description="Основываясь на требованиях и потребностях клиента, создаем дичные решения."
          />
          {dataBody?.map((item) => (
            <img
              key={item?.id}
              src={item?.icon}
              alt="item"
              className="w-[340px] h-[187px] rounded-[24px] bg-[#D9D9D9]"
            />
          ))}
          <Card
            description="Основываясь на требованиях и потребностях клиента, создаем дичные решения."
            title="Связаться с нами"
          />
          <Card
            description="Основываясь на требованиях и потребностях клиента, создаем дичные решения."
            title="Получить консультацию"
          />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Body;
