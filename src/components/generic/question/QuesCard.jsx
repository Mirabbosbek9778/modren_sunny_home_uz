import { quesData } from "../../../mock/quesCard";
import { COntent, Parag1, TextBold } from "../listCard/style";

const QuesCard = () => {
  return (
    <div className="flex items-center gap-1 pt-[74px]">
      {quesData.map((item) => (
        <COntent key={item?.id} size="true">
          <TextBold>{item?.title}</TextBold>
          <Parag1>{item?.about}</Parag1>
        </COntent>
      ))}
    </div>
  );
};

export default QuesCard;
