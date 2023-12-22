import { CardText, Con, Main, NewsCards } from "../../general/style";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ title, icons, about }) => {
  return (
    <Con>
      <Main className="">
        <img src={icons} alt="" className="rounded-[20px]" />
        <div className="relative z-10 flex flex-col gap-3 items-center justify-center pl-5">
          <CardText>{title}</CardText>
          <NewsCards>{about}</NewsCards>
        </div>
      </Main>
    </Con>
  );
};

export default NewsCard;
