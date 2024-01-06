import styled from "styled-components";

const Container = styled.div`
  width: ${({ size }) => (size ? "452.5px" : "339px")};
  height: ${({ size }) => (size ? "249px" : "187px")};
  border-radius: 20px;
  background-color: #0e677c;
  padding-top: 10px;
  padding-left: 10px;
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
  font-weight: ${({ size }) => (size ? "700" : "500")};
  font-size: ${({ size }) => (size ? "20px" : "16px")};
  width: ${({ size }) => (size ? "238px" : "280px")};
`;

const Input = styled.input`
  display: flex;
  height: ${({ size }) => (size ? "124px" : "60px")};
  padding: 21px 70px 20px 16px;
  width: 563px;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  color: var(--Text-Secondary, #686868);
  font-family: Inter, sans-serif;
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
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 581px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ModalButton = styled.button`
  display: flex;
  width: 339px;
  height: 60px;
  /* padding: 21px 0px 20px 0px; */
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--Primary-Default, #0e677c);
  color: var(--BTN-text, #fff);
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export { Container, Main, Text, Input, ModalText, ModalButton };
