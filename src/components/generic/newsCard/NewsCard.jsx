import { dataNews } from "../../../mock/dataNews";
import { CardText, Con, Main, NewsCards } from "../../general/style";

const NewsCard = () => {
  return (
    <Con>
      {dataNews.map((item) => (
        <Main key={item?.id} className="">
          <img src={item?.icons} alt="" className="rounded-[20px]" />
          <div className="relative z-10 flex flex-col gap-3 items-center justify-center pl-5">
            <CardText>{item?.title}</CardText>
            <NewsCards>{item?.about}</NewsCards>
          </div>
        </Main>
      ))}
    </Con>
  );
};

export default NewsCard;
