import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/logo/Logo";
import "./Style.scss"

import {
  Box,
  Container,
  Content,
  Main,
  Text,
  TextCont,
  Wrapper,
} from "./style";
import { navbarItem } from "../../mock/navbarItem";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [age, setAge] = useState("uz");

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

  const { i18n, t } = useTranslation();

  const handleChange = (e) => {
    switch (e) {
      case 0:
        return "Ru";
      case 1:
        return "Eng";
      case 2:
        return "Uz";
    }
  };

  return (
    <Wrapper scrolled={isScrolled} ref={navbarRef}>
      <Container>
        <Logo />
        <Main>
          {navbarItem?.map((item) => (
            <NavLink
              key={item?.id}
              to={`/${item?.path}`}
            >
              <Text>{item?.name}</Text>
            </NavLink>
          ))}
        </Main>
        <Content>
          <Text size="true">+998 95 552 06 06</Text>
          <Box style={{marginTop: "6px"}}>
              <div className="green-radius"></div>
            <TextCont>Мы на связи</TextCont>
          </Box>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
