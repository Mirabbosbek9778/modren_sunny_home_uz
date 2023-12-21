import AllImage from "../../components/allImage/AllImage";
import Compania from "../../components/compania/Compania";
import General from "../../components/general/General";
import Gen from "../../components/general/gen/Gen";
import Infromation from "../../components/information/Infromation";
import Modal from "../../components/modal/Modal";

const About = () => {
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
      </div>
    </div>
  );
};

export default About;
