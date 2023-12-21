import Map1 from "../../assets/img/map1.png";
import Map2 from "../../assets/img/map2.png";
import { Image, MapStyle } from "../body/style";
import { Bold, Small } from "../contacts/style";

const Maps = () => {
  return (
    <MapStyle>
      <div className="">
        <Small className="absolute pt-[550px] pl-5">
          Головной офис:{" "}
          <Bold className="w-[284px]">
            г. Ташкент, Яккасарайский р-н, ул. Имом Ат-Термизий, 52
          </Bold>
        </Small>
        <Image src={Map1} alt="Map1" />
      </div>
      <div>
        <Small className="absolute pt-[550px] pl-5">
          Производственный комплекс:{" "}
          <Bold className="w-[434px]">
            Андижанская область, Кургантепинский р-н, Чорвадор МСГ, ул. Чигатой,
            72-B
          </Bold>
        </Small>
        <Image src={Map2} alt="" />
      </div>
    </MapStyle>
  );
};

export default Maps;
