/* eslint-disable react/prop-types */
import { News } from "../../../assets";
import { Con, Main } from "../../general/style";

const NewsCard = ({ data }) => {
  const { img, description, title } = data;

  return (
    <Con>
      <Main>
        <img src={!img || News} alt="News" className="rounded-[20px]" />
        <div className="w-[290px] flex flex-col pl-5 gap-3 pr-7">
          <h1 className="font-[Inter] font-semibold text-[24px]">{title}</h1>
          <p className="text-[16px] font-medium font-[Inter] text-[#686868]">
            {description && "Heleleo fnfhfdjs"}
          </p>
        </div>
      </Main>
    </Con>
  );
};

export default NewsCard;
