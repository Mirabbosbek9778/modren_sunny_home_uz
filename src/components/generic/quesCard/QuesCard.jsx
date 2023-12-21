import { dataQues } from "../../../mock/dataQues";
import { Box, H1 } from "../../questions/style";

const QuesCard = () => {
  return (
    <div className="flex flex-wrap gap-1">
      {dataQues.map((item) => (
        <Box key={item?.id}>
          <H1>{item?.title}</H1>
          <div className="hover:bg-white w-20 h-20 flex justify-center items-center rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M25 13.0017H1"
                stroke="#121014"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.0037 25V1"
                stroke="#121014"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Box>
      ))}
    </div>
  );
};

export default QuesCard;
