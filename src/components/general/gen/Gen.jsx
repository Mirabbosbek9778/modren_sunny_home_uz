/* eslint-disable react/prop-types */
import { ONas } from "../../body/style";
import { HidenText } from "../../generic/cards/style";
import { Text } from "../../modal/style";
import { Container, Wrapper } from "../style";

const Gen = (props) => {
  return (
    <Wrapper>
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <ONas>{props?.about}</ONas>
            <Text>{props?.title}</Text>
          </div>
          <HidenText>{props?.description}</HidenText>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Gen;
