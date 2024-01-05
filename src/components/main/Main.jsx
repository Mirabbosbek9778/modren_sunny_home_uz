import { Box, Container, Content, LanguageText, Wrapper } from "./style";
// import Facebook from "../../assets/icons/facebook.svg";
// import Instagram from "../../assets/icons/instagram.svg";
// import Youtube from "../../assets/icons/youtube.svg";
// import Linkedin from "../../assets/icons/linkedin.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaceMain, InstaMain, LinkedMain, YouMain } from "../../assets";

const Main = () => {
  const [, setAge] = useState("uz");
  const [selectedLanguage, setSelectedLanguage] = useState("ru");

  const handleLanguageClick = (lang) => {
    setSelectedLanguage(lang);
  };

  const { i18n } = useTranslation();

  const handleChange = (e) => {
    switch (e) {
      case 0:
        return "ru";
      case 1:
        return "eng";
      case 2:
        return "uz";
    }
    setAge(e);
    changeLanguage(e);
  };

  const changeLanguage = (lan) => {
    i18n.changeLanguage(lan);
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          <LanguageText
            onClick={
              (() => handleLanguageClick("ru"), () => handleChange("ru"))
            }
            colur={selectedLanguage !== "ru"}
          >
            Ru
          </LanguageText>
          <LanguageText
            onClick={
              (() => handleLanguageClick("en"), () => handleChange("en"))
            }
            colur={selectedLanguage !== "en"}
          >
            Eng
          </LanguageText>
          <LanguageText
            onClick={
              (() => handleLanguageClick("uz"), () => handleChange("uz"))
            }
            colur={selectedLanguage !== "uz"}
          >
            Uz
          </LanguageText>
        </Content>
        <Box>
          <img src={FaceMain} alt="Facebook" />
          <img src={InstaMain} alt="Instagram" />
          <img src={LinkedMain} alt="Youtube" />
          <img src={YouMain} alt="Linkedin" />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Main;
