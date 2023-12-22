import { BigText, Box, Container, Content, SmallText, Wrapper } from "./style";
import Card from "../generic/card/Card";
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card8,
  Card9,
} from "../../assets";

const Body = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <BigText>MODERN SUNNY HOME</BigText>
          <SmallText>
            Приобретая наш дом, вы получаете не только готовое жилье, но и
            спокойствие, зная, что ваш дом соответствует высочайшим стандартам
            качества и безопасности.
          </SmallText>
        </Content>
        <Box>
          <Card
            title="Получить каталог"
            description="Основываясь на требованиях и потребностях клиента, создаем дичные решения."
          />
          <img
            src={Card1}
            alt="Card1"
            className="w-[340px] h-[187px] rounded-[24px] bg-[#D9D9D9]"
          />
          <img
            src={Card2}
            alt="Card2"
            className="w-[340px] h-[187px] rounded-[24px] bg-[#D9D9D9]"
          />
          <img
            src={Card3}
            alt="Card3"
            className="w-[340px] h-[187px] rounded-[24px] bg-[#D9D9D9]"
          />
          <img
            src={Card4}
            alt="Card4"
            className="w-[340px] h-[187px] rounded-[24px] bg-[#D9D9D9]"
          />
          <img
            src={Card5}
            alt="Card5"
            className="w-[340px] h-[187px] rounded-[24px] bg-[#D9D9D9]"
          />
          <img
            src={Card6}
            alt="Card6"
            className="w-[340px] h-[187px] rounded-[24px] bg-[#D9D9D9]"
          />
          <img
            src={Card8}
            alt="Card7"
            className="w-[340px] h-[187px] rounded-[24px] bg-[#D9D9D9]"
          />
          <img
            src={Card8}
            alt="Card8"
            className="w-[340px] h-[187px] rounded-[24px] bg-[#D9D9D9]"
          />
          <img
            src={Card9}
            alt="Card9"
            className="w-[340px] h-[187px] rounded-[24px] bg-[#D9D9D9]"
          />
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
