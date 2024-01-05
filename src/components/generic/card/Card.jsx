/* eslint-disable react/prop-types */
import { Container, Input, Main, ModalButton, ModalText, Text } from "./style";
import { useState } from "react";
import { Modal } from "antd";
import { P } from "../../contacts/style";
import { Plus } from "../../../assets";
import { useTranslation } from "react-i18next";

const Card = () => {
  const [open, setOpen] = useState(false);
  const [formSubmitted] = useState(false);

  const closeModal = () => {
    if (!formSubmitted) {
      setOpen(false);
    }
  };
  const { t } = useTranslation();

  return (
    <Container>
      <Main>
        <Text>{t("card_about")}</Text>
        <div className="flex items-center">
          <Text className="w-[238px]" size="true">
            {t("card_title")}
          </Text>
          <div>
            <div
              onClick={() => setOpen(true)}
              className="outline-none flex border-none pt-[10px]"
            >
              <img src={Plus} alt="Plus" />
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
                <ModalText className="flex justify-center  w-full">
                  Наши сотрудники позвонят вам в течении 48 часов и ответят на
                  все ваши вопросы
                </ModalText>
                <div className="flex flex-col gap-3">
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    className="text-black"
                  />
                  <Input type="tel" placeholder="+998 ___ __ __" />
                  <Input
                    type="text"
                    placeholder="Комментарий или вопрос"
                    className="h-[124px]"
                    size="true"
                  />
                  <div className="flex items-center">
                    <P>
                      Нажимая на кнопку «Отправить» вы соглашаетесьс политикой
                      конфиденциальности
                    </P>
                    <ModalButton onClick={() => setOpen(false)}>
                      Отправить
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
