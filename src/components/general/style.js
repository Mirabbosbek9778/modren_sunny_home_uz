import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #f0f2f4;
  padding: 150px 10px 150px 20px;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 74px;
`;

const CardText = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  align-self: stretch;
`;

const Con = styled.div`
  display: flex;
  gap: 3.5px;
  justify-content: center;
  background-color: #F0F2F4;
`;

const Main = styled.div`
  width: 338.5px;
  height: 534px;
  flex-shrink: 0;
  border-radius: 18px;
  background: var(--Bg-Secondary, #fff);
  backdrop-filter: blur(120.5999984741211px);
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
const NewsCards = styled.div`
  color: var(--Text-Secondary, #686868);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 143.75% */
`;
export { Wrapper, Container, CardText, Con, Main, NewsCards };
