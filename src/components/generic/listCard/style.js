import styled from "styled-components";

const COntent = styled.div`
  width: ${({ size }) => (size ? "681px" : "453px")};
  padding: ${({ size }) =>
    size ? "46px 24px 26px 24px" : "30px 21px 30px 20px"};
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 26px;
  cursor: pointer;
`;

const Parag1 = styled.div`
  width: 412px;
  color: var(--Text-Secondary, #686868);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

const TextBold = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CompaniaP = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  width: 495px;
`;

const CompaniaPlugin = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 115.385% */
`;

const Whitetext = styled.div`
  color: var(--BTN-text, #fff);
  font-family: Inter, sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 55px; /* 98.214% */
  width: 594px;
`;

const Buttons = styled.button`
  color: var(--BTN-color, #fff);
  font-family: Inter, sans-serif;
  display: flex;
  padding: 22px 36px;
  justify-content: center;
  align-items: center;
  background-color: white;
  gap: 10px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  border-radius: 1000px;
  line-height: 28px;
  color: black;
  &:hover {
    background: var(--Primary-Default, #0e677c);
    color: white;
  }
`;
export {
  COntent,
  Parag1,
  TextBold,
  CompaniaP,
  CompaniaPlugin,
  Whitetext,
  Buttons,
};
