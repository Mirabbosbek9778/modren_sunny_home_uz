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

import { Button, Dropdown, Space } from 'antd';


const Navbar = () => {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [activeAllInfo, setActiveAllInfo] = useState(false)
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
      key: '1',
      label: (
        <NavLink rel="noopener noreferrer" to='/information'>
          {t("footer_2")}
        </NavLink>
      ),
    },
    {
      key: '2',
      label: (
        <NavLink rel="noopener noreferrer" to='information'>
          {t("footer_4")}
        </NavLink>
      ),
    },
  ];

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
          {/* <NavLink to="/information">
            <Text>{t("all_infromation")}</Text>
          </NavLink> */}

          <Space direction="vertical">
            <Space wrap>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
              >
                <Button style={{ border: "none" }} >{t("all_infromation")}</Button>
                {/* <Text>{t("all_infromation")}</Text> */}
              </Dropdown>

            </Space>
          </Space>
          <NavLink to="/blog">
            <Text>{t("blog")}</Text>
          </NavLink>

          <NavLink to="/contact" >
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
