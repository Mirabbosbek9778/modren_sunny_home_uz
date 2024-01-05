import { useTranslation } from "react-i18next";
import { ONas } from "../../body/style";
import { HidenText } from "../../generic/cards/style";
import { Text } from "../../modal/style";
import { Container, Wrapper } from "../style";

const Gen = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <ONas>{t("gen_title")}</ONas>
            <Text>{t("gen_about")}</Text>
          </div>
          <HidenText>{t("gen_description")}</HidenText>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Gen;
