import { ONas } from "../body/style";
import { Container } from "../general/style";
import QuesCard from "../generic/quesCard/QuesCard";
import { Text, Wrapper } from "./style";

const Question = () => {
  return (
    <Wrapper>
      <Container>
        <div className="flex flex-col gap-4">
          <ONas>Вопросы</ONas>
          <Text>Часто задаваемые вопросы</Text>
        </div>
        <QuesCard />
      </Container>
    </Wrapper>
  );
};

export default Question;
