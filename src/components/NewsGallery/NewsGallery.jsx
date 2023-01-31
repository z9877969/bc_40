import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import news from "../../data/news.json";
import { getSearchNews } from "../../utils/newsApi";
import { useState } from "react";

const NewsGallery = () => {
  // const location = useLocation();

  const [news, setNews] = useState([]);
  const [search, setSearch] = useSearchParams();

  const query = search.get("query");
  const page = search.get("page");
  // const search = new URLSearchParams(location.search);

  const changePage = () => {
    setSearch({ query, page: Number(page) + 1 }); // query=query&page=3
  };

  useEffect(() => {
    if (!query) return;
    getSearchNews(query, page).then((data) => setNews(data.articles));
  }, [query, page]);

  return (
    <>
      <NewsList news={news} />

      {news.length > 0 && <Button title={"LoadMore"} onClick={changePage} />}
    </>
  );
};

export default NewsGallery;
