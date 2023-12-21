import { Container } from "../body/style";
import { Medium, Small } from "../contacts/style";
import QuesCard from "../generic/quesCard/QuesCard";
import { Text, Wrapper } from "../modal/style";

const AllInformation = () => {
  return (
    <Wrapper>
      <Container>
        <div className="pt-[74px]">
          <Small className="flex items-center gap-1">
            <Medium size>Главная /</Medium>FAQ
          </Small>
          <div className="flex justify-between pt-[74px]">
            <Text>Популярные вопросы</Text>
          </div>
        </div>
        <div>
          <QuesCard />
        </div>
      </Container>
    </Wrapper>
  );
};

export default AllInformation;
