import { Description, Subtitle } from "./style";

/* eslint-disable react/prop-types */
const SingleCard = ({ data }) => {
  if (!data) {
    return <div>No data available</div>;
  }

  const { img, img2, img3, subtitle, description, img4 } = data;

  return (
    <div className="flex justify-center bg-[#F0F2F4] pb-[150px]">
      <div className="flex flex-col gap-1">
        <div>
          <img
            src={img}
            alt="img"
            className="w-[1336px] h-[800px] bg-cover bg-no-repeat flex rounded-3xl"
          />
        </div>
        <div className="flex justify-center items-center gap-1">
          <img
            src={img2}
            alt="img2"
            className="w-[666px] h-[422px] rounded-3xl"
          />
          <img
            src={img3}
            alt="img3"
            className="w-[666px] h-[422px] rounded-3xl"
          />
        </div>
        <div className="flex justify-between items-center pt-[60px] flex-col gap-[60px]">
          <div className="flex justify-between items-center w-full">
            <Subtitle>{subtitle}</Subtitle>
            <Description>{description}</Description>
          </div>
          <div>
            <img src={img4} alt="img4" className="w-[593px] h-[692px] rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
