/* eslint-disable react/prop-types */
import { ONas } from "../body/style";
import Cards from "../generic/cards/Cards";
import { HidenText } from "../generic/cards/style";
import { Text } from "../modal/style";
import { Container, Wrapper } from "./style";

const General = (props) => {
  return (
    <Wrapper>
      <Container>
        <div className="flex flex-col gap-6">
          <ONas>{props?.about}</ONas>
          <div className="flex justify-between items-center">
            <Text size="true">{props?.title}</Text>
            <HidenText>{props?.description}</HidenText>
          </div>
        </div>
        <Cards />
      </Container>
    </Wrapper>
  );
};

export default General;
