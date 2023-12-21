import styled from "styled-components";

const Medium = styled.div`
  color: #686868;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  width: ${({ size }) => (size ? "" : "681px")};
  cursor: ${({ size }) => (size ? "" : "pointer")};
  font-size: ${({ size }) => (size ? "14px" : "16px")};
`;

const Small = styled.div`
  color: #121014;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;

const Bold = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Inputs = styled.input`
  background-color: ${({ colur }) => (colur ? "#F0F2F4" : "#fff")};
  display: flex;
  height: ${({ size }) => (size ? "124px" : "68px")};
  padding: 0px 537px 0px 16px;
  align-items: ${({ size }) => (size ? "" : "center")};
  padding-bottom: ${({ size }) => (size ? "70px" : "")};
  align-self: stretch;
  border-radius: 12px;
  background: var(--Bg-Secondary, #fff);
  outline: none;
  color: var(--Text-Secondary, #686868);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Button = styled.button`
  display: flex;
  width: 339px;
  height: 68px;
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

const P = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 300px;
  height: 51px;
  text-decoration-line: ${({ under }) => (under ? "underline" : "")};
  cursor: ${({ under }) => (under ? "pointer" : "")};
`;
const Box = styled.div`
  display: flex;
  padding: 18px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: var(--Bg-Secondary, #fff);
  display: flex;
  align-items: center;
  gap: 4px;
`;

export { Medium, Small, Bold, Inputs, Button, P, Box };
