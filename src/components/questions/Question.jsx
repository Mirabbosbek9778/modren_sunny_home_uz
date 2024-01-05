import { useTranslation } from "react-i18next";
import { ONas } from "../body/style";
import { Container } from "../general/style";
import QuesCard from "../generic/quesCard/QuesCard";
import { Text, Wrapper } from "./style";

const Question = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <div className="flex flex-col gap-4">
          <ONas>{t("question_1")}</ONas>
          <Text>{t("questions_2")}</Text>
        </div>
        <QuesCard />
      </Container>
    </Wrapper>
  );
};

export default Question;
