import { Container, Main, Text } from "../style";
import { useState } from "react";
import { Plus } from "../../../../assets";
import { useTranslation } from "react-i18next";

const Item = () => {
  const [, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Container size="true">
      <Main>
        <Text>{t("item_description")}</Text>
        <div className="flex items-center justify-between">
          <Text className="w-[238px]" size="true">
            {t("item_title")}
          </Text>
          <div>
            <div
              onClick={() => setOpen(true)}
              className="border-none outline-none pt-[85px] pr-[1px]"
            >
              <a href="/product">
                <img src={Plus} alt="Plus" />
              </a>
            </div>
          </div>
        </div>
      </Main>
    </Container>
  );
};

export default Item;
