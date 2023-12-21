/* eslint-disable react/prop-types */
import { Container, Input, Main, ModalButton, ModalText, Text } from "./style";
import { useState } from "react";
import { Modal } from "antd";
import { P } from "../../contacts/style";

const Card = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Main>
        <Text>{props?.description}</Text>
        <div className="flex items-center">
          <Text className="w-[238px]" size="true">
            {props?.title}
          </Text>
          <div>
            <div
              onClick={() => setOpen(true)}
              className="outline-none flex border-none pt-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <rect width="80" height="80" rx="19" fill="white" />
                <path
                  d="M52.3458 39.5076H28.6421"
                  stroke="#0E677C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.4976 51.358V27.6543"
                  stroke="#0E677C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Modal
              centered
              open={open}
              width={1000}
              className="outline-none"
              visible={open}
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
