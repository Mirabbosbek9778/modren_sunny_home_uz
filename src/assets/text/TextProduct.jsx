import { Container, SmallText } from "../../components/body/style";
import { Medium, Small } from "../../components/contacts/style";
import { Text, Wrapper } from "../../components/modal/style";

// eslint-disable-next-line react/prop-types
const TextProduct = ({ title, name }) => {
  console.log(title);
  return (
    <Wrapper>
      <Container>
        <div className="pt-[74px]">
          <Small className="flex items-center gap-1">
            <Medium size>Главная /</Medium>
            {name}
          </Small>
          <div className="flex justify-between pt-[74px]">
            <Text>{title}</Text>
            <SmallText>
              Здесь должно быть короткий текс о жилых комплексов, основная
              деятельность компании - это строительство модульных (префабричных)
              домов легкой конструкции, доступных по цене и производимых в
              короткие сроки.
            </SmallText>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default TextProduct;
