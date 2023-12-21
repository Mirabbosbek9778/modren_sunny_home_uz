import styled from "styled-components";

const Text = styled.div`
  width: ${({ size }) => (size ? "474px" : "714px")};
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 115.385% */
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
`;

export { Text, Container };
