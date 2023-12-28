import Slider from "react-slick";
import { useGlobalContext } from "../../context/Coin";

const Carousel = () => {
  const { productCard } = useGlobalContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      {productCard?.map((item) => (
        <Slider key={item?.id} className="flex" {...settings}>
          <div className="flex">
            <img src={item?.img} alt="" className="w-[681px] h-[50px] " />
            <img src={item?.img} alt="" className="w-[681px] h-[50px]" />
            <img src={item?.img} alt="" className="w-[681px] h-[50px]" />
          </div>
        </Slider>
      ))}
    </div>
  );
};

export default Carousel;
