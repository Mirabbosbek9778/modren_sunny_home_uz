import { Text, Wrapper } from "../modal/style";
import { Container, ONas } from "../body/style.js";
import { Texts } from "./style.js";
import Item from "../generic/card/item/Item.jsx";
import { Product1, Product2, Product3, Product5 } from "../../assets/index.js";

const Products = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <ONas>Продукты</ONas>
          <Text>Наши продукты</Text>
        </div>
        <div className="flex flex-col gap-[74px]">
          <div className="relative">
            <Texts>Проект (2+1) 70м2</Texts>
            <img src={Product1} alt="" className="rounded-[30px]" />
            <button className="absolute z-50 bottom-5 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="124"
                viewBox="0 0 125 124"
                fill="none"
              >
                <rect width="125" height="124" rx="28" fill="white" />
                <path
                  d="M81.79 61.2368H44.7529"
                  stroke="#0E677C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M63.2773 79.605V42.8643"
                  stroke="#0E677C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <Texts>Проект (2+1) 70м2</Texts>
            <img src={Product2} alt="" className="rounded-[30px]" />
            <button className="absolute z-50 bottom-5 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="124"
                viewBox="0 0 125 124"
                fill="none"
              >
                <rect width="125" height="124" rx="28" fill="white" />
                <path
                  d="M81.79 61.2368H44.7529"
                  stroke="#0E677C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M63.2773 79.605V42.8643"
                  stroke="#0E677C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <Texts>Проект (2+1) 70м2</Texts>
            <img src={Product3} alt="" className="rounded-[30px]" />
            <button className="absolute z-50 bottom-5 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="124"
                viewBox="0 0 125 124"
                fill="none"
              >
                <rect width="125" height="124" rx="28" fill="white" />
                <path
                  d="M81.79 61.2368H44.7529"
                  stroke="#0E677C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M63.2773 79.605V42.8643"
                  stroke="#0E677C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Texts>Проект (2+1) 70м2</Texts>
              <img
                src={Product5}
                alt=""
                className="w-[452.5px] h-[249px] rounded-[24px]"
              />
            </div>
            <div className="relative">
              <Texts>Проект (2+1) 70м2</Texts>
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
