/* eslint-disable react/no-unescaped-entities */
import { Container, Wrapper } from "../body/style";
import { SmallText } from "../generic/cards/style";
import { CompaniaP, CompaniaPlugin } from "../generic/listCard/style";

const Compania = () => {
  return (
    <Wrapper>
      <Container size="true">
        <div className="pl-[60px] pt-[60px] pr-[60px] pb-[60px] flex flex-col gap-[30px]">
          <CompaniaPlugin className="">Производство</CompaniaPlugin>
          <div className="flex justify-between pt-[74px]">
            <SmallText>Кратко о технологиях производства</SmallText>
            <div className="flex">
              <CompaniaP>
                -Слово "сборный", которое вошло в наш язык из английского слова
                "prefabrikate" (предварительное изготовление деталей дома); все
                детали, составляющие конструкцию дома (детали, предварительно
                изготовленные в заводских условиях), объединяются по статическим
                расчетам. Поскольку все части дома производятся с расчетом в
                заводских условиях, предотвращается возникновение проблем
                (ненастная погода и другие непредвиденные обстоятельства), с
                которыми сталкиваются при строительстве традиционных домов. В
                настоящее время готовые конструкции широко используются при
                строительстве общежитий, офисов, социальных объектов, школах,
                больницах, лагерях и военных зданиях.
              </CompaniaP>
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <rect x="0.75" width="60" height="60" rx="14" fill="#F0F2F4" />
                <path
                  d="M37.4072 23.3448L24.8364 35.9155"
                  stroke="#0E677C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37.4082 35.9128L24.8374 23.342"
                  stroke="#0E677C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between ">
            <h1>Наша политика качества:</h1>
            <div className="">
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <rect x="0.75" width="60" height="60" rx="14" fill="#F0F2F4" />
                <path
                  d="M37.4072 23.3448L24.8364 35.9155"
                  stroke="#0E677C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37.4082 35.9128L24.8374 23.342"
                  stroke="#0E677C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between ">
            <h1>Наша политика по охране труда</h1>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <rect x="0.75" width="60" height="60" rx="14" fill="#F0F2F4" />
                <path
                  d="M37.4072 23.3448L24.8364 35.9155"
                  stroke="#0E677C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37.4082 35.9128L24.8374 23.342"
                  stroke="#0E677C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between ">
            <h1>Наша политика по экологии </h1>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <rect x="0.75" width="60" height="60" rx="14" fill="#F0F2F4" />
                <path
                  d="M37.4072 23.3448L24.8364 35.9155"
                  stroke="#0E677C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37.4082 35.9128L24.8374 23.342"
                  stroke="#0E677C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Compania;
