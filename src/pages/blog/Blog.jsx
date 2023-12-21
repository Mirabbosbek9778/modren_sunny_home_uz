import BlogBody from "../../components/blogBody/BlogBody";
import Gen from "../../components/general/gen/Gen";
import NewsCard from "../../components/generic/newsCard/NewsCard";

const Blog = () => {
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
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default Blog;
