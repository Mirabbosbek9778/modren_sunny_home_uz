import styled from "styled-components";

const Subtitle = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Description = styled.div`
  width: 478px;
  flex-shrink: 0;
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: end;
`;
export { Subtitle, Description };
