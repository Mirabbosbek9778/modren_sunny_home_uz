import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f0f2f4;
  border-radius: 24px;
`;

const Wrap = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(453px, 0fr));
  grid-gap: 4px;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding-bottom: 150px;
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 20px;
`;

const ModalButton = styled.button`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--BTN-color, #fff);
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 100px;
  background: var(--Bg-Secondary, #fff);
  &:hover {
    background: var(--Primary-Default, #0e677c);
  }
`;
export { Container, Wrap, ModalFooter, ModalButton };
