import { Text, Wrapper } from "../modal/style";
import { Container, ONas } from "../body/style.js";
import { Texts } from "./style.js";
import Item from "../generic/card/item/Item.jsx";
import {
  Plus,
  Product1,
  Product2,
  Product3,
  Product5,
} from "../../assets/index.js";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <div>
          <ONas>{t("products_title")}</ONas>
          <Text>{t("products_we")}</Text>
        </div>
        <div className="flex flex-col gap-[74px]">
          <div className="relative">
            <Texts>{t("product_size")}</Texts>
            <img src={Product1} alt="" className="rounded-[30px]" />
            <button className="absolute z-50 bottom-5 right-4">
              <img src={Plus} alt="Plus" />
            </button>
          </div>
          <div className="relative">
            <Texts>{t("product_size")}</Texts>
            <img src={Product2} alt="" className="rounded-[30px]" />
            <button className="absolute z-50 bottom-5 right-4">
              <img src={Plus} alt="Plus" />
            </button>
          </div>
          <div className="relative">
            <Texts>{t("product_size")}</Texts>
            <img src={Product3} alt="" className="rounded-[30px]" />
            <button className="absolute z-50 bottom-5 right-4">
              <img src={Plus} alt="Plus" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Texts>{t("product_size")}</Texts>
              <img
                src={Product5}
                alt=""
                className="w-[452.5px] h-[249px] rounded-[24px]"
              />
            </div>
            <div className="relative">
              <Texts>{t("product_size")}</Texts>
              <img
                src={Product5}
                alt=""
                className="w-[452.5px] h-[249px] rounded-[24px]"
              />
            </div>
            <Item
              title="Все проекты"
              description="Основываясь на требованиях и потребностях клиента, создаем дичные решения."
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Products;
