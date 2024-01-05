import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo";
import { Container, TextSocial, Wrapper } from "../body/style";
import { Bold, Box, Small } from "../contacts/style";
import { Facebook, Instagram, Telegram, Youtube } from "../../assets";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

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
                <Link to="/about">{t("body_item_title")}</Link>
              </TextSocial>
              <TextSocial>
                <Link to="/gallery">{t("gallery")}</Link>
              </TextSocial>
              <TextSocial>
                <Link to="/contact">{t("contact")}</Link>
              </TextSocial>
            </div>
            <div className="flex flex-col gap-4">
              <TextSocial colur="true">{t("products")}</TextSocial>
              <TextSocial>
                <Link to="/product">{t("footer_1")}</Link>
              </TextSocial>
              <TextSocial>{t("footer_2")}</TextSocial>
            </div>
            <div className="flex flex-col gap-4">
              <TextSocial colur="true">{t("all_infromation")}</TextSocial>
              <TextSocial>{t("footer_3")}</TextSocial>
              <TextSocial>
                <Link to="/information">{t("footer_4")}</Link>
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
              {t("location_1")}{" "}
              <Bold className="w-[253px]">{t("location_2")}</Bold>
            </Small>
            <Small className="flex flex-col gap-2">
              {t("location_3")}{" "}
              <Bold className="w-[320px]">{t("location_4")}</Bold>
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
