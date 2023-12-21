import styled from "styled-components";

const COntent = styled.div`
  width: 453px;
  padding: 30px 21px 30px 20px;
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
font-family: Inter,sans-serif;
font-size: 52px;
font-style: normal;
font-weight: 700;
line-height: 60px; /* 115.385% */
`;
export { COntent, Parag1, TextBold, CompaniaP, CompaniaPlugin };
