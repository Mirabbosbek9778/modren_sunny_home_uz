import { About, Gift, Secure } from "../../assets";

const Project = () => {
  return (
    <div className="flex w-full justify-center bg-[#F0F2F4] pb-[150px]">
      <div className="flex justify-center gap-1">
        <div className="h-[850px] p-[60px] flex flex-col gap-[74px] w-[681px] bg-white rounded-3xl">
          <h1>О проекте</h1>
          <p className="w-[561px]">
            ЦЕНА НЕ ВКЛЮЧАЕТ НДС! Ideal Prefabrik, ведущая компания в турецкой
            отрасли производства сборных домов, производит самые качественные и
            современные здания в Турции. Самая прочная стропильная система
            крыши, которой нет ни у одной другой компании в нашей стране,
            запатентована нашей компанией и предоставляется нашим клиентам
            бесплатно. МОЙ СБОРНЫЙ ДОМ / ИДЕАЛЬНЫЙ ДОМ– Общие технические
            характеристики сборных домов, подготовленные для вас, наших
            уважаемых клиентов, которые позволяют нам быть ведущей организацией
            в секторе сборных домов. Внешняя обшивка: плоский бетопанВысота
            здания: 2500 ммНаружная стена: 10 смВнутренняя стена: 6 смКровля:
            Окрашенный оцинкованный лист, металлочерепица (по желанию), гонт (по
            желанию)Наружная дверь: Стальная дверьВнутренняя дверь: Американская
            белая дверьОкна: Свинец -без ПВХЭ лектромонтаж:
            Встроеннаясантехника: Встраиваемыйугол Покрытие: Эстетичные угловые
            покрытия Бетопан для всех углов… Изготавливаются наружные и
            внутренние покрытия желаемых типов….По ценам обращайтесь..
          </p>
        </div>
        <div className="h-[423px] w-full bg-white rounded-3xl flex flex-col">
          <div className="p-6 cursor-pointer">
            <div className="flex flex-col gap-1">
              <div className="h-32 flex items-center gap-4 pt-[37px] pl-8 pr-[287px] pb-[37px] bg-[#0E677C] rounded-[14px]">
                <img src={Gift} alt="Gift" />
                <h1>Бесплатная установка</h1>
              </div>
              <div className="h-32 flex items-center gap-4 pt-[37px] pl-8 pr-[287px] pb-[37px] bg-[#0E677C] rounded-[14px]">
                <img src={Secure} alt="Secure" />
                <h1>10-лет гарантия на обслуживание</h1>
              </div>
              <div className="h-32 flex items-center gap-4 pt-[37px] pl-8 pr-[287px] pb-[37px] bg-[#0E677C] rounded-[14px]">
                <img src={Secure} alt="Secure" />
                <h1>2-года гарантия на сборку</h1>
              </div>
            </div>
            <div className="mt-3 w-[681px]">
              <img
                src={About}
                alt="about"
                className="w-full h-[423px] rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
