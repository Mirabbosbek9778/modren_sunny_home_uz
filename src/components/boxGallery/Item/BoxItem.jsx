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
    // console.log(currentSlide);
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
          className="border bg-[rgba(107, 104, 109, 0.7)] bg-opacity-5 "
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1480}
          classNames={{ backgroundColor: "rgba(107, 104, 109, 0.7)" }}
          style={{ backgroundColor: "rgba(240, 242, 244, 0.8)" }}
          footer={
            <ModalFooter>
              <h1>Галерея сборных домов</h1>
              <div className="flex items-center">
                <ModalButton
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  Одноэтажные дома
                </ModalButton>
                <ModalButton>Двухэтажные дома</ModalButton>
                <ModalButton>Коммерчиские комплексы</ModalButton>
              </div>
            </ModalFooter>
          }
        >
          <Carousel afterChange={onChange} className="bg-opacity-0">
            <div className="pl-10 ">
              <img src={img} alt="img" className="opacity-100" />
            </div>
            <img src={img} alt="img" />
            <div></div>
          </Carousel>
        </Modal>
      </Container>
    </div>
  );
};

export default BoxItem;
