import { Link } from "react-router-dom";
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

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Main>
          <Link to="/about">
            <Text>О компании</Text>
          </Link>
          <Link to="/product">
            <Text>Продукты</Text>
          </Link>
          <Link to="/gallery">
            <Text>Галерея</Text>
          </Link>
          <Link to="/information">
            <Text>Общая информация</Text>
          </Link>
          <Link to="/blog">
            <Text>Блог</Text>
          </Link>
          <Link to="/contact">
            <Text>Контакты</Text>
          </Link>
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
