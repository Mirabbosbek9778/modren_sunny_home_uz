import { useTranslation } from "react-i18next";
import { Container, SmallText, Wrapper } from "../body/style";
import { Medium, Small } from "../contacts/style";
import { Buttons } from "../generic/listCard/style";
import { Text } from "../modal/style";

const BoxGalleru = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <div className="pt-[74px]">
          <Small className="flex items-center gap-1">
            <Medium size>{t("blog_gen")} /</Medium>
            {t("gen_title")}
          </Small>
          <div className="flex justify-between pt-[74px]">
            <Text>{t("gallery_title")}</Text>
            <SmallText>{t("blog_des")}</SmallText>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Buttons>{t("gallery_title1")}</Buttons>
          <Buttons>{t("gallery_title2")}</Buttons>
          <Buttons>{t("footer_2")}</Buttons>
        </div>
      </Container>
    </Wrapper>
  );
};

export default BoxGalleru;
