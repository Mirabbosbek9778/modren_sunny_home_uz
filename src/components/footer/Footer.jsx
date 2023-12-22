import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo";
import { Container, TextSocial, Wrapper } from "../body/style";
import { Bold, Box, Small } from "../contacts/style";
import { Facebook, Instagram, Telegram, Youtube } from "../../assets";

const Footer = () => {
  return (
    <Wrapper className="bg-custom-background">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <TextSocial>
                <Link to="/about">О нас</Link>
              </TextSocial>
              <TextSocial>
                <Link to="/gallery">Галерея</Link>
              </TextSocial>
              <TextSocial>
                <Link to="/contact">Контакты</Link>
              </TextSocial>
            </div>
            <div className="flex flex-col gap-4">
              <TextSocial colur="true">
                <Link to="/product">Продукты</Link>
              </TextSocial>
              <TextSocial>
                <Link to="/product">Жилые комплексы</Link>
              </TextSocial>
              <TextSocial>Коммерческие комплексы</TextSocial>
            </div>
            <div className="flex flex-col gap-4">
              <TextSocial colur="true">
                <Link to="/information">Общая информация</Link>
              </TextSocial>
              <TextSocial>Используемое сырье</TextSocial>
              <TextSocial>
                <Link to="/information">FAQ</Link>
              </TextSocial>
            </div>
            <div className="flex flex-col gap-4">
              <TextSocial>+998 95 552 0606</TextSocial>
              <TextSocial>+998 95 553 0606</TextSocial>
              <TextSocial>info@mshome.uz</TextSocial>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-[53px]">
            <Small className="flex flex-col gap-2">
              Головной офис:{" "}
              <Bold className="w-[253px]">
                г. Ташкент, Яккасарайский р-н, ул. Имом Ат-Термизий, 52
              </Bold>
            </Small>
            <Small className="flex flex-col gap-2">
              Производственный комплекс:
              <Bold className="w-[320px]">
                Андижанская область, Кургантепинский р-н, Чорвадор МСГ, ул.
                Чигатой, 72-B
              </Bold>
            </Small>
          </div>
          <div className="flex items-center gap-2">
            <Box>
              <a href="">
                <img src={Facebook} alt="Facebook" />
              </a>
            </Box>
            <Box>
              <a href="">
                <img src={Instagram} alt="Instagram" />
              </a>
            </Box>
            <Box>
              <a href="">
                <img src={Youtube} alt="Youtube" />
              </a>
            </Box>
            <Box>
              <a href="https://t.me/sherbee535">
                <img src={Telegram} alt="Telegram" />
              </a>
            </Box>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
