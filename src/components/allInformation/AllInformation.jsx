// import { useEffect, useState } from "react";
import { Container } from "../body/style";
import { Medium, Small } from "../contacts/style";
import QuesCard from "../generic/quesCard/QuesCard";
import { Text, Wrapper } from "../modal/style";
// import { Axios } from "axios";

const AllInformation = () => {
  // const [dataQues, setQuesCard] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await Axios.get("https://api.mshome.uz/api/gallery/");
  //       setQuesCard(response?.data);
  //     } catch (error) {
  //       console.error("There was a problem with the Axios request:", error);
  //     }
  //   };
  //   getData();
  // }, []);
  return (
    <Wrapper>
      <Container>
        <div className="pt-[74px]">
          <Small className="flex items-center gap-1">
            <Medium size>Главная /</Medium>FAQ
          </Small>
          <div className="flex justify-between pt-[74px]">
            <Text>Популярные вопросы</Text>
          </div>
        </div>
        {/* {dataQues.map((item) => ( */}
        <div>
          <QuesCard />
          {/* data={item} */}
        </div>
        {/* // ))} */}
      </Container>
    </Wrapper>
  );
};

export default AllInformation;
