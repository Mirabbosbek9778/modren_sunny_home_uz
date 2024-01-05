import { useState } from "react";
import { Button, P } from "../contacts/style";
import { Con, InputTel, Inputs, Parag, Text, Wrapper } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Modal = () => {
  const notify = () => toast("отправить запись ");
  const [phone, setPhone] = useState("");

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
          <PhoneInput
            country={"uz"}
            // value={this.state.phone}
            onChange={(phone) => setPhone({ phone })}
          />
          <Inputs required
            type="text"
            placeholder="Комментарий или вопрос"
            className="h-[124px]"
            size="true"
            colur="true"
          />
          <div className="flex items-center gap-3 w-full">
            <P>
              Нажимая на кнопку «Отправить» вы соглашаетесьс{" "}
              <P under="true">
                политикой {"  "} <P under="true">конфиденциальности</P>
              </P>
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
