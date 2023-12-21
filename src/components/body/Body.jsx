import { BigText, Box, Container, Content, SmallText, Wrapper } from "./style";
import Card from "../generic/card/Card";
import Card1 from "../../assets/img/card1.png";
import Card2 from "../../assets/img/card2.png";
import Card3 from "../../assets/img/card3.png";
import Card4 from "../../assets/img/card4.png";
import Card5 from "../../assets/img/card5.png";
import Card6 from "../../assets/img/card6.png";
import Card7 from "../../assets/img/card7.png";
import Card8 from "../../assets/img/card8.png";
import Card9 from "../../assets/img/card9.png";

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
            src={Card7}
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
