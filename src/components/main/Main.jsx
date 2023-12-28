import { Box, Container, Content, LanguageText, Wrapper } from "./style";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import { useState } from "react";
const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("ru");

  const handleLanguageClick = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          <LanguageText
            onClick={() => handleLanguageClick("ru")}
            colur={selectedLanguage !== "ru"}
          >
            Ru
          </LanguageText>
          <LanguageText
            onClick={() => handleLanguageClick("en")}
            colur={selectedLanguage !== "en"}
          >
            Eng
          </LanguageText>
          <LanguageText
            onClick={() => handleLanguageClick("uz")}
            colur={selectedLanguage !== "uz"}
          >
            Uz
          </LanguageText>
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
