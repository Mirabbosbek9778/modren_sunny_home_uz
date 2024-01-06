import { BlogBody, Gen, NewsCard } from "../../components";
import { useGlobalContext } from "../../context/Coin";

const Blog = () => {
  const { newCard } = useGlobalContext();

  return (
    <div>
      <BlogBody />
      <div className="flex flex-col justify-center">
        <Gen
          title="Новости компании"
          about="Блог"
          description="Здесь должно быть короткий текс о новостях компании- 
            здесь будет отоброжаться толька 4 последних новостей остальные новости о компании будет в разделе Новости или БЛОГ "
        />
        <div className="flex justify-center bg-[#f0f2f4] mt-[-145px] pr-[60px] pb-[150px]">
          {newCard?.map((item) => (
            <NewsCard key={item?.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
