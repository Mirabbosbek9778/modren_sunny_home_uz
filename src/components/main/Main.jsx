import { Box, Container, Content, LanguageText, Wrapper } from "./style";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <LanguageText>Ru</LanguageText>
          <LanguageText colur="true">Eng</LanguageText>
          <LanguageText colur="true">Uz</LanguageText>
        </Content>
        <Box>
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Youtube} alt="Youtube" />
          <img src={Linkedin} alt="Linkedin" />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Main;
