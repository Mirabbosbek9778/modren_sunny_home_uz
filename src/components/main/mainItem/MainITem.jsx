import { Container, Underline, WhiteText, Wrapper } from "../style";

const MainITem = () => {
  return (
    <Wrapper>
      <Container>
        <WhiteText>Modern Sunny Home, 2023. All rights reserved.</WhiteText>
        <WhiteText>
          Design by:{" "}
          <Underline href="https://future-group.uz/">Future.agancy</Underline>
        </WhiteText>
      </Container>
    </Wrapper>
  );
};

export default MainITem;
