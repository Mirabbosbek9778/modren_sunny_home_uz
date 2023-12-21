import { listCard } from "../../../mock/listCard";
import { COntent, Parag1, TextBold } from "./style";

const ListCard = () => {
  return (
    <div className="flex items-center gap-1 pt-[74px]">
      {listCard.map((item) => (
        <COntent key={item?.id}>
          <TextBold>{item?.title}</TextBold>
          <Parag1>{item?.about}</Parag1>
        </COntent>
      ))}
    </div>
  );
};

export default ListCard;
