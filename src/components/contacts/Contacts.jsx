import { Bag, Call, Home, Message } from "../../assets";
import { BigText, Container, Wrapper } from "../body/style";
import { Bold, Button, Inputs, Medium, P, Small } from "./style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const notify = () => toast("отправить запись ");

  return (
    <Wrapper>
      <Container>
        <Small className="flex items-center gap-1">
          <Medium size>Главная /</Medium>Контакты
        </Small>
        <div className="flex flex-col gap-7">
          <BigText>Контакты</BigText>
          <Medium>
            Свяжитесь с нами любым удобным вам способом, или заполните форму и
            мы перезвоним вам для обсуждения деталей вашего проекта
          </Medium>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <img src={Call} alt="phone" />
              <Bold className="flex flex-col">
                +998 95 553 0606 <Bold>+998 95 552 0606</Bold>
              </Bold>
            </div>
            <div className="flex items-center gap-5">
              <img src={Message} alt="Message" />
              <Bold>info@mshome.uz</Bold>
            </div>
            <div className="flex items-center gap-5">
              <img src={Bag} alt="Bag" />
              <Small className="flex flex-col gap-2">
                Головной офис:
                <Bold className="w-[253px]">
                  г. Ташкент, Яккасарайский р-н, ул. Имом Ат-Термизий, 52
                </Bold>
              </Small>
            </div>
            <div className="flex items-center gap-5">
              <img src={Home} alt="Home" />
              <Small className="flex flex-col gap-2">
                Производственный комплекс:{" "}
                <Bold className="flex flex-col w-[368px]">
                  Андижанская область, Кургантепинский р-н, Чорвадор МСГ, ул.
                  Чигатой, 72-B
                </Bold>
              </Small>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Inputs type="text" placeholder="Ваше имя" />
            <Inputs type="tel" placeholder="+998 ___ __ __" />
            <Inputs
              type="text"
              placeholder="Комментарий или вопрос"
              className="h-[124px]"
              size="true"
            />
            <div className="flex items-center gap-3">
              <Button onClick={notify}>Отправить</Button>
              <ToastContainer />
              <P>
                Нажимая на кнопку «Отправить» вы соглашаетесьс{" "}
                <P under>политикой {"  "} конфиденциальности</P>
              </P>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Contacts;
