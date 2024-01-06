import { Box, Container, Content, LanguageText, Wrapper } from "./style";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaceMain, InstaMain, LinkedMain, YouMain } from "../../assets";
import "./index.css";

const Main = () => {
  const { i18n } = useTranslation();

  const [, setSelectedLanguage] = useState("ru");

  const [activeLang, setActiveLang]=useState("rus")

  const handleLanguageClick = (lang, langTime) => {
    setSelectedLanguage(lang);
    handleChange(lang);
    setActiveLang(langTime)
  };

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          <LanguageText style={activeLang == "rus" ? {color: "white"} : {color: "#FFF", opacity: "0.3"}}
            onClick={() => handleLanguageClick("ru", "rus")}
          >
            Ru
          </LanguageText>
          <LanguageText style={activeLang == "eng" ? {color: "white"}  : {color: "#FFF", opacity: "0.3"}} onClick={() => handleLanguageClick("en", "eng")}>
            Eng
          </LanguageText>
          <LanguageText style={activeLang == "uzb" ? {color: "white"}  : {color: "#FFF", opacity: "0.3"}} onClick={() => handleLanguageClick("uz", "uzb")}>
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
