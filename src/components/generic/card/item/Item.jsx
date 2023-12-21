/* eslint-disable react/prop-types */
import { Container, Input, Main, ModalText, Text } from "../style";
import { useState } from "react";
import { Button, Modal } from "antd";

const Item = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Container size="true">
      <Main>
        <Text>{props?.description}</Text>
        <div className="flex items-center">
          <Text className="w-[238px]" size="true">
            {props?.title}
          </Text>
          <div>
            <Button
              onClick={() => setOpen(true)}
              className="border-none outline-none"
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
            </Button>
            <Modal
              centered
              open={open}
              width={1000}
              className="outline-none"
              visible={open}
            >
              <div className="flex flex-col justify-between">
                <ModalText>
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
                  <Input type="text" placeholder="Комментарий или вопрос" />
                  <p>
                    Нажимая на кнопку «Отправить» вы соглашаетесьс политикой
                    конфиденциальности
                  </p>
                  <button>Отправить</button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </Main>
    </Container>
  );
};

export default Item;
