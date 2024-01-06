import { Box, Container, Content, LanguageText, Wrapper } from "./style";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaceMain, InstaMain, LinkedMain, YouMain } from "../../assets";
import "./index.css";

const Main = () => {
  const { i18n } = useTranslation();

  const [, setSelectedLanguage] = useState("ru");

  const handleLanguageClick = (lang) => {
    setSelectedLanguage(lang);
    handleChange(lang);
  };

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          <LanguageText
            onClick={() => handleLanguageClick("ru")}
            className="active:text-white"
          >
            Ru
          </LanguageText>
          <LanguageText onClick={() => handleLanguageClick("en")}>
            Eng
          </LanguageText>
          <LanguageText onClick={() => handleLanguageClick("uz")}>
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
