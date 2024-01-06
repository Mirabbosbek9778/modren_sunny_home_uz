import styled from "styled-components";

const Wrapper = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  padding: 0 12px 0;
  border-bottom: 1px solid var(--Line-color, rgba(18, 16, 20, 0.05));
  background: var(--Background-BLUR, rgba(255, 255, 255, 0.4));
  backdrop-filter: blur(120.5999984741211px);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 16px;
`;

const Text = styled.h1`
  color: #121014;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: ${({ size }) => (size ? "700" : "6 00")};
  line-height: 100%;
  text-align: ${({ size }) => (size ? "right" : "")};
`;

const TextCont = styled.div`
  color: #121014;
  text-align: right;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  display: flex;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  padding: 12px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  justify-content: end;
`;

const ProductCard = styled.div`
  display: flex;
  position: relative;
`;
export { Container, Wrapper, Text, TextCont, Main, Content, Box, ProductCard };
