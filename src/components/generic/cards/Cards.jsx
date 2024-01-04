import { dataCards } from "../../../mock/dataCards";
import { CardText } from "../../general/style";
import { Con, Image, SmallText } from "./style";

const Cards = () => {
  return (
    <Con>
      {dataCards?.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col gap-6 w-[452.5px] h-[240px] bg-white rounded-[24px] pt-[30px] pl-5 pb-[30px] pr-5 cursor-pointer"
        >
          <Image src={item?.icons} alt="" />
          <div className="flex flex-col gap-3">
            <CardText>{item?.title}</CardText>
            <SmallText>{item?.about}</SmallText>
          </div>
        </div>
      ))}
    </Con>
  );
};

export default Cards;
