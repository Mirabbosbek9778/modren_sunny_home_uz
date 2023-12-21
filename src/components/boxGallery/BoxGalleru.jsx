import { Container, SmallText, Wrapper } from "../body/style";
import { Medium, Small } from "../contacts/style";
import { Buttons } from "../generic/listCard/style";
import { Text } from "../modal/style";

const BoxGalleru = () => {
  return (
    <Wrapper>
      <Container>
        <div className="pt-[74px]">
          <Small className="flex items-center gap-1">
            <Medium size>Главная /</Medium>Блог
          </Small>
          <div className="flex justify-between pt-[74px]">
            <Text>Галерея сборных домов</Text>
            <SmallText>
              Здесь должно быть короткий текс о новостях компании- здесь будет
              отоброжаться толька 4 последних новостей остальные новости о
              компании будет в разделе Новости или БЛОГ
            </SmallText>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Buttons>ОДНОЭТАЖНЫЕ ДОМА</Buttons>
          <Buttons>ДВУХЭТАЖНЫЕ ДОМА</Buttons>
          <Buttons>Коммерческие комплексы</Buttons>
        </div>
      </Container>
    </Wrapper>
  );
};

export default BoxGalleru;
