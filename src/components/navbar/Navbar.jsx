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
import { Dropdown, Menu } from "antd";

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

  const items = [
    {
      key: "1",
      label: (
        <NavLink
          to="/information"
          className="hover:border-none outline-none text-lg font-semibold"
        >
          {t("footer_2")}
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          to="/information"
          className="hover:border-none outline-none text-lg font-semibold"
        >
          {t("footer_4")}
        </NavLink>
      ),
    },
  ];

  const itemsProduct = [
    {
      key: "1",
      label: (
        <NavLink
          to="/information"
          className="hover:border-none outline-none text-base font-semibold"
        >
          {t("dropdown_title")}
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          to="/information"
          className="hover:border-none outline-none text-base font-semibold"
        >
          {t("footer_2")}
        </NavLink>
      ),
    },
  ];

  const productsMenu = (
    <Menu>
      {itemsProduct?.map((item) => (
        <Menu.Item key={item?.key}>{item?.label}</Menu.Item>
      ))}
    </Menu>
  );

  const informationMenu = (
    <Menu>
      {items?.map((item) => (
        <Menu.Item key={item?.key}>{item?.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Wrapper scrolled={isScrolled} ref={navbarRef}>
      <Container>
        <Logo />
        <Main>
          <NavLink to="/about">
            <Text>{t("about")}</Text>
          </NavLink>
          <Dropdown overlay={productsMenu} placement="bottomCenter">
            <Text className="hover:border-none outline-none text-base font-semibold">
              {t("products")}
            </Text>
          </Dropdown>

          <NavLink to="/gallery">
            <Text>{t("gallery")}</Text>
          </NavLink>

          <Dropdown overlay={informationMenu} placement="bottomCenter">
            <Text className="hover:border-none outline-none text-base font-semibold">
              {t("all_infromation")}
            </Text>
          </Dropdown>
          <NavLink to="/blog">
            <Text>{t("blog")}</Text>
          </NavLink>

          <NavLink to="/contact">
            <Text>{t("contact")}</Text>
          </NavLink>
        </Main>
        <Content>
          <Text size="true">{t("number")}</Text>
          <Box>
            <div className="green-radius w-[6px] h-[6px]"></div>
            <TextCont>{t("set")}</TextCont>
          </Box>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
