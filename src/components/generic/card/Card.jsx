/* eslint-disable react/prop-types */
import { Container, Input, Main, ModalButton, ModalText, Text } from "./style";
import { useState } from "react";
import { Modal } from "antd";
import { P } from "../../contacts/style";
import "./Style.scss";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Card = () => {
  const [open, setOpen] = useState(false);
  const [formSubmitted] = useState(false);
  const [, setPhone] = useState("+998 ");

  const [, setBtnRotate] = useState(false);
  const [btnScale, setBtnScale] = useState(false);

  const onBtn = () => {
    setBtnRotate(true);
    setBtnScale(true);
  };

  const offBtn = () => {
    setBtnRotate(false);
    setBtnScale(false);
  };

  const closeModal = () => {
    if (!formSubmitted) {
      setOpen(false);
    }
  };
  const { t } = useTranslation();

  return (
    <Container>
      <Main>
        <Text style={{ marginBottom: "10px" }}></Text>
        <Text>{t("card_about")}</Text>
        <div className="flex items-center">
          <Text className="w-[238px]" size="true">
            {t("card_title")}
          </Text>
          <div>
            <div
              onClick={() => setOpen(true)}
              style={
                !btnScale
                  ? { transform: "scale(100%)", transition: "700ms" }
                  : { transform: "scale(85%)", transition: "500ms" }
              }
              className="card-btn outline-none flex border mt-[15.5px] ml-2"
              onMouseOut={() => offBtn()}
              onMouseOver={() => onBtn()}
            >
              <div
                style={
                  !btnScale
                    ? { transform: "rotate(90deg)", transition: "700ms" }
                    : { transform: "rotate(-90deg)", transition: "500ms" }
                }
                onMouseOut={() => offBtn()}
                onMouseOver={() => onBtn()}
                className="plus-card"
              >
                +
              </div>
            </div>
            <Modal
              centered
              open={open}
              width={1000}
              onCancel={closeModal}
              className="outline-none"
              visible={false}
              footer={null}
            >
              <div className="flex flex-col justify-center gap-10 mt-16 w-full items-center mb-16">
                <ModalText>{t("plus_modal_title")}</ModalText>
                <div className="flex flex-col gap-3">
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    className="text-black"
                  />
                  <PhoneInput
                    country={"uz"}
                    onChange={(phone) => setPhone({ phone })}
                    buttonStyle={{ border: "none" }}
                    inputStyle={{
                      width: "100%",
                      height: "60px",
                      background: "#f0f2f4",
                      border: "none",
                      outline: "none",
                      color: "#686868",
                      fontSize: "16px",
                      borderRadius: "12px",
                    }}
                  />
                  <Input
                    type="text"
                    placeholder="Комментарий или вопрос"
                    className="h-[124px]"
                    size="true"
                  />
                  <div className="flex items-center">
                    <P>{t("plus_modal_text")}</P>
                    <ModalButton onClick={() => setOpen(false)}>
                      {t("modal_button")}
                    </ModalButton>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </Main>
    </Container>
  );
};

export default Card;
