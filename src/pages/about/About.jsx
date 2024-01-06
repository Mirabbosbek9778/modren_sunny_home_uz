import {
  AllImage,
  Compania,
  Gen,
  General,
  Infromation,
  Modal,
  NewsCard,
} from "../../components";
import { useGlobalContext } from "../../context/Coin";

const About = () => {
  const { newCard } = useGlobalContext();

  return (
    <div className="flex flex-col">
      <Infromation />
      <AllImage />
      <Modal />
      <div className="mt-[-100px]">
        <General title="Наши преимущества" description="" about="" />
      </div>
      <Compania />
      <div className="mt-[-100px]">
        <Gen
          title="Новости компании"
          about=""
          description="Здесь должно быть короткий текс о новостях компании- 
        здесь будет отоброжаться толька 4 последних новостей остальные новости о компании будет в разделе Новости илил БЛОГ "
        />
        {newCard?.map((item) => (
          <NewsCard key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default About;
