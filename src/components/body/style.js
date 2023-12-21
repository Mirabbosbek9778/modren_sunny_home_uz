import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 74px 20px 150px 20px;
  display: flex;
  justify-content: center;
  background-color: #f0f2f4;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 74px;
  padding: ${({ size }) => (size ? "60px 60xp 60px 60xp" : "")};
  border-radius: ${({ size }) => (size ? "20px" : "")};
  background-color: ${({ size }) => (size ? "white" : "")};
`;

const BigText = styled.h1`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 68px;
  font-style: normal;
  font-weight: 700;
  line-height: 75px;
  width: 474px;
  flex-shrink: 0;
`;

const SmallText = styled.div`
  width: 649px;
  flex-shrink: 0;
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 200;
  line-height: 28px;
`;

const Content = styled.div`
  display: flex;
  place-items: end;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  cursor: pointer;
`;

const MapStyle = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  background-color: #f0f2f4;
  padding-top: 124px;
  padding-bottom: 150px;
`;

const Image = styled.img`
  border: 5px solid white;
  border-radius: 20px;
  cursor: pointer;
`;

const Socialstyle = styled.div`
  background-color: #f0f2f4;
  display: flex;
  width: 1440px;
  height: 119px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--Bg-Secondary, #fff);
  align-items: center;
  justify-content: space-around;
`;

const TextSocial = styled.div`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ size }) => (size ? "400" : "600")};
  line-height: normal;
  color: ${({ colur }) => (colur ? "#686868" : "#121014")};
`;

const Cons = styled.div`
  display: flex;
  width: 204px;
  height: 60px;
  padding: 18px 72px 18px 18px;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: var(--Bg-Main, #f0f2f4);
  cursor: pointer;
`;
const H1Text = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 107.143% */
  width: 653px;
`;

const PText = styled.div`
  color: var(--Text-Secondary, #686868);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 143.75% */
  width: 565px;
`;

const ONas = styled.div`
  color: var(--Primary-Default, #0e677c);
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export {
  ONas,
  PText,
  H1Text,
  Cons,
  TextSocial,
  Wrapper,
  Container,
  BigText,
  SmallText,
  Content,
  Box,
  MapStyle,
  Image,
  Socialstyle,
};
