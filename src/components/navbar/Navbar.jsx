import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo/Logo";
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

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
  const location = useLocation();

  return (
    <Wrapper scrolled={isScrolled} ref={navbarRef}>
      <Container>
        <Logo />
        <Main>
          {navbarItem?.map((item) => (
            <Link
              key={item?.id}
              to={`/${item?.path}`}
              className={
                location.pathname === `/${item?.path}`
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <Text>{item?.name}</Text>
            </Link>
          ))}
        </Main>
        <Content>
          <Text size="true">+998 95 552 06 06</Text>
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <circle cx="3" cy="3" r="3" fill="#44FF00" />
            </svg>
            <TextCont>Мы на связи</TextCont>
          </Box>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
