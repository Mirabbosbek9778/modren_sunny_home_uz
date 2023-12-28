/* eslint-disable react/prop-types */
import { News } from "../../../assets";
import { CardText, Con, Main, NewsCards } from "../../general/style";

// eslint-disable-next-line react/prop-types, no-unused-vars
const NewsCard = ({ data }) => {
  // const { subtitle, img } = data;

  return (
    <Con>
      <Main>
        <img src={News} alt="News" className="rounded-[20px]" />
        <div className="relative z-10 flex flex-col gap-3 items-center justify-center pl-5">
          <CardText>{"whbsdbshhbdfshsffsjnh"}</CardText>
          <NewsCards>{0 && "hehllo"}</NewsCards>
        </div>
      </Main>
    </Con>
  );
};

export default NewsCard;
