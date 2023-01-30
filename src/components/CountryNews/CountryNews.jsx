import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getTopNews } from "../../utils/newsApi";
import NewsList from "../NewsList/NewsList";

const CountryNews = () => {
  const { country } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {
    getTopNews(country).then((data) => setNews(data.articles));
  }, [country]);

  return (
    <>
      <h1>News {country.toUpperCase()}</h1>
      <NewsList news={news} />
    </>
  );
};

export default CountryNews;
