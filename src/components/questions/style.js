import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #f0f2f4;
  display: flex;
  justify-content: center;
  padding: 0 20px 150px 20px;
`;

const Text = styled.div`
  width: 501px;
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 115.385% */
`;

const Box = styled.div`
  border-radius: 20px;
  background: var(--Bg-Secondary, #fff);
  width: 681px;
  min-width: 681px;
  max-width: 681px;
  padding: 46px 24px;
  gap: 4px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #0e677c;
  }
`;

const H1 = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 31px; /* 129.167% */
`;
export { Wrapper, Text, Box, H1 };
