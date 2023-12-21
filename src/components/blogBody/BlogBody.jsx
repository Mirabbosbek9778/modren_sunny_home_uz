import { Container, SmallText, Wrapper } from "../body/style";
import { Medium, Small } from "../contacts/style";
import { Text } from "../modal/style";
import Blog1 from "../../assets/images/blog1.png";
import { Whitetext } from "../generic/listCard/style";

const BlogBody = () => {
  return (
    <Wrapper>
      <Container>
        <div className="pt-[74px]">
          <Small className="flex items-center gap-1">
            <Medium size>Главная /</Medium>Блог
          </Small>
          <div className="flex justify-between pt-[74px]">
            <Text>Новости компании</Text>
            <SmallText>
              Здесь должно быть короткий текс о новостях компании- здесь будет
              отоброжаться толька 4 последних новостей остальные новости о
              компании будет в разделе Новости или БЛОГ
            </SmallText>
          </div>
        </div>
        <div className="relative">
          <Whitetext className="absolute z-50 top-[52px] left-10">
            Заголовок новости не более 2 строк
          </Whitetext>
          <img src={Blog1} alt="Blog1" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-50 bottom-1 right-0"
            width="101"
            height="100"
            viewBox="0 0 101 100"
            fill="none"
          >
            <rect x="0.25" width="100" height="100" rx="22" fill="white" />
            <path
              d="M65.6824 49.3845H36.0527"
              stroke="#0E677C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50.8721 64.1975V34.5679"
              stroke="#0E677C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Container>
    </Wrapper>
  );
};

export default BlogBody;
