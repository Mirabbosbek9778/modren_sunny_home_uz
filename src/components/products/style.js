import styled from "styled-components";

const Texts = styled.div`
  color: var(--BTN-color, #fff);
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  top: 45px;
  left: 50px;
  width: 159px;
`;

const BoxImage = styled.img`
  border-radius: 10px;
  width: 453px;
  height: 400px;
`;

const ButtonPlus = styled.button`
  position: absolute;
  bottom: 1px;
  display: flex;
  justify-content: end;
  width: 100%;
`;
export { Texts, BoxImage, ButtonPlus };
