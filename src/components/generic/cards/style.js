import styled from "styled-components";

const Con = styled.div`
  flex-shrink: 0;
  border-radius: 24px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
`;

const SmallText = styled.div`
  color: var(--Text-Main, #121014);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 143.75% */
  align-self: stretch;
`;

const HidenText = styled.div`
  color: var(--Text-Secondary, #686868);
  font-family: Inter, sans-serif;
  font-size: ${({ size }) => (size ? "16px" : "20px")};
  font-style: normal;
  font-weight: 500;
  width: ${({ size }) => (size ? "530px" : "575px")};
  line-height: 28px; /* 140% */
  padding-right: 20px;
`;

export { Con, Image, SmallText, HidenText };
