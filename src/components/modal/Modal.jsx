import { useState } from "react";
import { Button, P } from "../contacts/style";
import { Con, Inputs, Parag, Text, Wrapper } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";

const Modal = () => {
  const notify = () => toast("отправить запись ");
  const [, setPhone] = useState("");

  const { t } = useTranslation();

  return (
    <Wrapper>
      <Con>
        <div className="flex flex-col items-center justify-center gap-7">
          <Text>{t("modal_title")}</Text>
          <Parag>{t("modal_about")}</Parag>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Inputs type="text" placeholder="Ваше имя" colur="true" />
          <PhoneInput
            country={"uz"}
            onChange={(phone) => setPhone({ phone })}
          />
          <Inputs
            type="text"
            placeholder="Комментарий или вопрос"
            className="h-[124px]"
            size="true"
            colur="true"
          />
          <div className="flex items-center gap-3 w-full">
            <P>
              {t("modaL_content")}
              <P under="true">{t("modaL_content_underline")}</P>
            </P>
            <Button onClick={notify}>{t("modal_button")}</Button>
            <ToastContainer />
          </div>
        </div>
      </Con>
    </Wrapper>
  );
};

export default Modal;
