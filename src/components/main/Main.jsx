import { Box, Container, Content, LanguageText, Wrapper } from "./style";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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

// console.log(age);

// const [data, setData] = useState({});
// const [currentLang, setCurrentLang] = useState("ru");

// useEffect(() => {
//   fetchData();
// }, [currentLang]);

// const fetchData = async () => {
//   try {
//     const response = await fetch("https://api.mshome.uz/api/params/4/");
//     const result = await response.json();
//     setData(result);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// const getContentByLang = () => {
//   switch (currentLang) {
//     case "uz":
//       return data?.val_uz;
//     case "ru":
//       return data?.val_ru;
//     case "en":
//       return data?.val_en;
//     default:
//       return data?.val_uz;
//   }
// };
// console.log(currentLang);
