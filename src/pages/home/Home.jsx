import Body from "../../components/body/Body";
import BodyItem from "../../components/body/bodyItem/BodyItem";
import General from "../../components/general/General";
import Gen from "../../components/general/gen/Gen";
import Modal from "../../components/modal/Modal";
import Products from "../../components/products/Products";
import Question from "../../components/questions/Question";
import Social from "../../components/social/Social";
import Xonsulting from "../../components/xonsulting/Xonsulting";

const Home = () => {
  return (
    <div>
      <Body />
      <BodyItem />
      <Modal />
      <Social />
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
      <Question />
      <Xonsulting />
    </div>
  );
};

export default Home;
