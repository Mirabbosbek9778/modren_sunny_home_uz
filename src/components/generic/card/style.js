import styled from "styled-components";

const Container = styled.div`
  width: ${({ size }) => (size ? "452.5px" : "339px")};
  height: ${({ size }) => (size ? "249px" : "187px")};
  border-radius: 20px;
  background-color: #0e677c;
  padding-top: 10px;
  padding-left: 20px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Text = styled.div`
  color: var(--BTN-color, #fff);
  font-family: Inter, sans-serif;
  font-style: normal;
  line-height: ${({ size }) => (size ? "21px" : "")};
  font-weight: ${({ size }) => (size ? "500" : "700")};
  font-size: ${({ size }) => (size ? "20px" : "16px")};
  width: ${({ size }) => (size ? "238px" : "280px")};
`;

const Input = styled.input`
  display: flex;
  height: 60px;
  padding: 21px 470px 20px 16px;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  color: var(--Text-Secondary, #686868);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--Bg-Main, #f0f2f4);
  outline: none;
`;

const ModalText = styled.h1`
  color: var(--Text-Main, #121014);
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 581px;
`;
export { Container, Main, Text, Input, ModalText };
