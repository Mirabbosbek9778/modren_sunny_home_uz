import { useState } from "react";
import { Button, P } from "../contacts/style";
import { Con, Inputs, Main, Parag, Text, Wrapper } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import { useTranslation } from "react-i18next";

import "react-phone-input-2/lib/style.css";

const Modal = () => {
  const notify = () => toast("отправить запись");
  const [, setPhone] = useState("+998 ");

  const { t } = useTranslation();

  return (
    <Wrapper>
      <Con>
        <Main>
          <Text>{t("modal_title")}</Text>
          <Parag>{t("modal_about")}</Parag>
        </Main>
        <div className="flex flex-col gap-3 items-center w-[563px]">
          <Inputs type="text" placeholder="Ваше имя" />
          <PhoneInput
            country={"uz"}
            onChange={(phone) => setPhone({ phone })}
            buttonStyle={{ border: "none", backgroundColor: "#f0f2f4" }}
            inputStyle={{
              width: "100%",
              height: "60px",
              background: "#f0f2f4",
              border: "none",
              outline: "none",
              color: "#686868",
              fontSize: "16px",
            }}
          />
          <Inputs
            required
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
