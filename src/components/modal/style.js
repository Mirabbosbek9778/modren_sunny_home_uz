import styled from "styled-components";
import { PhoneInput } from "react-international-phone";

const Inputs = styled.input`
  display: flex;
  height: 60px;
  /* padding: 21px 470px 20px 16px; */
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  background: var(--Bg-Main, #f0f2f4);
  color: var(--Text-Secondary, #686868);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
`;

const Text = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px; /* 100% */
  width: ${({ size }) => (size ? "673px" : "498px")};
`;

const Parag = styled.p`
  color: var(--Text-Main, #121014);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px; /* 143.75% */
  width: 406px;
  margin-right: 80px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f0f2f4;
  padding-bottom: 6px;
  padding: 0 20px 150px 20px;
`;

const Con = styled.div`
  max-width: 1336px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 24px;
  background: var(--Bg-Secondary, #fff);
  height: 420px;
  align-items: center;
  padding: 0 60px 0 60px;
`;
const InputTel = styled(PhoneInput)`
  width: 100%;
  border: 1px solid red;
  outline: none;
`;
export { Inputs, Text, Parag, Wrapper, Con, InputTel };
