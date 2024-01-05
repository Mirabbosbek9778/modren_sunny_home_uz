/* eslint-disable react/prop-types */
import { ONas } from "../body/style";
import Cards from "../generic/cards/Cards";
import { HidenText } from "../generic/cards/style";
import { Text } from "../modal/style";
import { Container, Wrapper } from "./style";
import { useTranslation } from "react-i18next";

const General = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <div className="flex flex-col gap-6">
          <ONas>{t("general_about")}</ONas>
          <div className="flex justify-between items-center">
            <Text size="true">{t("gerneral_title")}</Text>
            <HidenText>{t("general_description")}</HidenText>
          </div>
        </div>
        <Cards />
      </Container>
    </Wrapper>
  );
};

export default General;
