import dataCard1 from "../assets/icons/dataCard1.svg";
import dataCard2 from "../assets/icons/dataCard2.svg";
import Time from "../assets/icons/time.svg";
import People from "../assets/icons/people.svg";
import House from "../assets/icons/house.svg";
import Location from "../assets/icons/location.svg";

export const dataCards = [
  {
    id: 1,
    title: "Экономичность ",
    about:
      "Все материалы модульных (префабричных) домов, являются производственными и не требуют больших усилий при монтаже. ",
    icons: dataCard1,
  },
  {
    id: 2,
    title: " Устойчивы к землетрясениям",
    about:
      "Благодаря своей легкой конструкции модульные (префабричные) дома устойчивы к землетрясениям.",
    icons: dataCard2,
  },
  {
    id: 3,
    title: "Их можно перемещать",
    about:
      "Модульные (префабричные) дома портативны. Их можно демонтировать и переместить в другое место.",
    icons: Time,
  },
  {
    id: 4,
    title: "Индивидуальный дизайн",
    about:
      "По желанию клиента можно спроектировать дом по индивидульному дизайну.",
    icons: People,
  },
  {
    id: 5,
    title: "Экономия времени",
    about:
      "Поскольку материалы, необходимые для создания конструкции производятся заранее, а его сборка осуществляется в короткие сроки. ",
    icons: House,
  },
  {
    id: 6,
    title: "Готовые проекты",
    about:
      "При желании можно очень быстро выбрать готовый проект, так как уже существует множество разработанных проектов.",
    icons: Location,
  },
];
