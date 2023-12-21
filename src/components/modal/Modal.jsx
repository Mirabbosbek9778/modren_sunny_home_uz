import { Button, P } from "../contacts/style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Con, Inputs, Parag, Text, Wrapper } from "./style";

const Modal = () => {
  const notify = () => toast("отправить запись ");

  return (
    <Wrapper>
      <Con>
        <div className="flex flex-col items-center justify-center">
          <Text>Заказать обратный звонок</Text>
          <Parag>
            Заполните форму, и мы с радостью проконсультируем вас и поможем
            сделать выбор.
          </Parag>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Inputs type="text" placeholder="Ваше имя" colur="true" />
          <Inputs type="tel" placeholder="+998 ___ __ __" colur="true" />
          <Inputs
            type="text"
            placeholder="Комментарий или вопрос"
            className="h-[124px]"
            size="true"
            colur="true"
          />
          <div className="flex items-center gap-3">
            <P>
              Нажимая на кнопку «Отправить» вы соглашаетесьс{" "}
              <P under>политикой {"  "} конфиденциальности</P>
            </P>
            <Button onClick={notify}>Отправить</Button>
            <ToastContainer />
          </div>
        </div>
      </Con>
    </Wrapper>
  );
};

export default Modal;
