import { Plus } from "../../../assets";
import { dataQues } from "../../../mock/dataQues";
import { Box, H1 } from "../../questions/style";

const QuesCard = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="flex flex-wrap gap-1">
      {dataQues?.map((item) => (
        <Box
          key={item?.id}
          items={item?.id}
          onChange={onChange}
          className="flex items-center justify-between w-[681px] pt-[46px] pr-[24px] pb-[46px] pl-[24px] bg-white"
        >
          <H1>{item?.title}</H1>
          <div className="hover:bg-white w-20 h-20 flex justify-center items-center rounded-2xl">
            <img src={Plus} alt="Plus" onChange={onChange} />
          </div>
        </Box>
      ))}
    </div>
  );
};
export default QuesCard;
