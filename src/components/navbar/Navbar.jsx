import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/Logo";
import "./Style.scss";

import {
  Box,
  Container,
  Content,
  Main,
  Text,
  TextCont,
  Wrapper,
} from "./style";
import { useEffect, useRef, useState } from "react";
// import { useGlobalContext } from "../../context/Coin";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  // const { dataLanguage } = useGlobalContext();
  const { t } = useTranslation();

  const handleScroll = () => {
    const offset = navbarRef.current.getBoundingClientRect().top;
    if (offset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 


  console.log(translations);

  return (
    <Wrapper scrolled={isScrolled} ref={navbarRef}>
      <Container>
        <Logo />
        <Main>
          <NavLink to="/about">
            <Text>{t("about")}</Text>
          </NavLink>
          <NavLink to="/product">
            <Text>Продукты</Text>
          </NavLink>
          <NavLink to="/gallery">
            <Text>Галерея</Text>
          </NavLink>
          <NavLink to="/information">
            <Text>Общая информация</Text>
          </NavLink>
          <NavLink to="/blog">
            <Text>Блог</Text>
          </NavLink>
          <NavLink to="/contact">
            <Text>Контакты</Text>
          </NavLink>
        </Main>
        <Content>
          <Text size="true">+998 95 552 06 06</Text>
          <Box style={{ marginTop: "6px" }}>
            <div className="green-radius w-[6px] h-[6px]"></div>
            <TextCont>Мы на связи</TextCont>
          </Box>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
