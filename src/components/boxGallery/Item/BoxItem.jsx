/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Plus, noimg } from "../../../assets";
import { BoxImage, ButtonPlus, Texts } from "../../products/style";
import { Container, ModalButton, ModalFooter } from "./style";
import { Modal, Carousel } from "antd";

const BoxItem = ({ data }) => {
  const { img, subtitle, subtitle_en, subtitle_ru } = data;

  const [open, setOpen] = useState(false);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="w-[453px] h-[400px] flex">
      <Container>
        <Texts>{subtitle || "Название проекта или локация"}</Texts>
        <BoxImage src={img || noimg} alt="icon" />
        <ButtonPlus onClick={() => setOpen(true)}>
          <img src={Plus} alt="Plus" />
        </ButtonPlus>

        <Modal
          title=""
          className="border bg-[#f0f2f4]"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1480}
          classNames={{ backgroundColor: "#f0f2f4" }}
          footer={
            <ModalFooter>
              <h1>Галерея сборных домов</h1>
              <div className="flex">
                <ModalButton>Одноэтажные дома</ModalButton>
                <ModalButton>Двухэтажные дома</ModalButton>
                <ModalButton>Коммерчиские комплексы</ModalButton>
              </div>
            </ModalFooter>
          }
        >
          <Carousel afterChange={onChange}>
            <div className="pl-10 ">
              <img src={img} alt="img" />
            </div>
            <div>
              <img src={img} alt="img" />
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
          </Carousel>
        </Modal>
      </Container>
    </div>
  );
};

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default BoxItem;
