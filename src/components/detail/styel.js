import styled from "styled-components";

const DetailImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

const Box = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(681px, 0fr));
  grid-gap: 4px;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding-bottom: 150px;
  border-radius: 24px;
`;

export { DetailImg, Box };
