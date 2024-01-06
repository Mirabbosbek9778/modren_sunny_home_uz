import {
  Body,
  BodyItem,
  Gen,
  General,
  Modal,
  NewsCard,
  Products,
  Question,
  Social,
  Xonsulting,
} from "../../components";
import { useGlobalContext } from "../../context/Coin";

const Home = () => {
  const { newCard } = useGlobalContext();

  return (
    <div>
      <Body />
      <BodyItem />
      <Modal />
      <div className="mt-[-145px]">
        <Social />
      </div>
      <General
        title="Готовый, комфортный и привлекательный дизайн"
        about="Преимущества"
        description="Мы меняем стереотип о том, что строительство занимает много времени и сил, с нами вы получите дом с готовым дизайном и ремонтом всего за 2-3 недели."
      />
      <Products />
      <Gen
        title="Новости компании"
        about="Блог"
        description="Здесь должно быть короткий текс о новостях компании- 
          здесь будет отоброжаться толька 4 последних новостей остальные новости о компании будет в разделе Новости или БЛОГ "
      />
      {newCard?.map((item) => (
        <NewsCard key={item?.id} data={item} />
      ))}
      <Question />
      <Xonsulting />
    </div>
  );
};

export default Home;
