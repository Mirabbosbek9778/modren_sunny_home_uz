/* eslint-disable react/prop-types */
import { News, Plus } from "../../../assets";
import { CardText, Con, Main, NewsCards } from "../../general/style";

// eslint-disable-next-line react/prop-types, no-unused-vars
const NewsCard = ({ data }) => {
  const { subtitle, img } = data;

  return (
    <Con>
      <Main className="border">
        <img src={News} alt="News" className="rounded-[20px]" />
        <div className="relative z-10 flex flex-col gap-3 items-center justify-center pl-5">
          <CardText>{"whbsdbshhbdfshsffsjnh"}</CardText>
          <div className="flex items-center">
            <NewsCards>{0 || "hehllo"}</NewsCards>
            <img src={Plus} alt="" />
          </div>
        </div>
      </Main>
    </Con>
  );
};

export default NewsCard;
