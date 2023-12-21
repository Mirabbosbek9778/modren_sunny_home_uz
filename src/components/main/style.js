import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background: #0e677c;
  padding: 8px 20px 8px 20px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LanguageText = styled.div`
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  line-height: 100%;
  cursor: pointer;
  color: ${({ colur }) => (colur ? "#FFF" : "#fff")};
  font-weight: ${({ colur }) => (colur ? "400" : "600")};
  opacity: ${({ colur }) => (colur ? "0.3" : "")};
`;

const Content = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const WhiteText = styled.div`
  color: var(--BTN-color, #fff);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

const Underline = styled.a`
  color: var(--BTN-color, #fff);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-decoration-line: underline;
`;
export { Container, Wrapper, LanguageText, Content, Box, WhiteText, Underline };
