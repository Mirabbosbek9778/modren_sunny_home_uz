import { Medium, Small } from "../contacts/style";
import { HidenText } from "../generic/cards/style";
import ListCard from "../generic/listCard/ListCard";
import { Wrapper } from "../questions/style";
import { Container, Text } from "../xonsulting/style";
import { Bold, P1 } from "./style";

const Infromation = () => {
  return (
    <Wrapper>
      <Container>
        <div className="flex  justify-between">
          <div className="flex flex-col gap-6">
            <Small className="flex items-center gap-1 pt-[74px] pb-12">
              <Medium size>Главная /</Medium>О компании
            </Small>
            <Text size="true">MODERN SUNNY HOME</Text>
            <HidenText className="w-[415px]" size="true">
              Основная деятельность компании - это строительство модульных
              (префабричных) домов легкой конструкции, доступных по цене и
              производимых в короткие сроки.
            </HidenText>
          </div>
          <div className="flex gap-10 items-center pt-[200px]">
            <div>
              <Bold>С 2022 года</Bold>
              <P1>Занимаемся строительством модульных (префабричных) домов.</P1>
            </div>
            <div>
              <Bold>50+</Bold>
              <P1 size="true">Реализовано уникальных проектов</P1>
            </div>
          </div>
        </div>
        <ListCard />
      </Container>
    </Wrapper>
  );
};

export default Infromation;
