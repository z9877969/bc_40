import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import news from "../../data/news.json";

const NewsGallery = () => {
  return (
    <>
      <NewsList news={news} />

      {news.length > 0 && <Button />}
    </>
  );
};

export default NewsGallery;
