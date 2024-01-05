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
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
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

  return (
    <Wrapper scrolled={isScrolled} ref={navbarRef}>
      <Container>
        <Logo />
        <Main>
          <NavLink to="/about">
            <Text>{t("about")}</Text>
          </NavLink>
          <NavLink to="/product">
            <Text>{t("products")}</Text>
          </NavLink>
          <NavLink to="/gallery">
            <Text>{t("gallery")}</Text>
          </NavLink>
          <NavLink to="/information">
            <Text>{t("all_infromation")}</Text>
          </NavLink>
          <NavLink to="/blog">
            <Text>{t("blog")}</Text>
          </NavLink>
          <NavLink to="/contact">
            <Text>{t("contact")}</Text>
          </NavLink>
        </Main>
        <Content>
          <Text size="true">{t("number")}</Text>
          <Box style={{ marginTop: "6px" }}>
            <div className="green-radius w-[6px] h-[6px]"></div>
            <TextCont>{t("set")}</TextCont>
          </Box>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
