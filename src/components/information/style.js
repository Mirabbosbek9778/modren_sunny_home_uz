import styled from "styled-components";

const Bold = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const P1 = styled.div`
  color: var(--Text-Secondary, #686868);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
  width: ${({ size }) => (size ? "218px" : "357px")};
`;
export { Bold, P1 };
