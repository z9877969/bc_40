import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import AboutPage from "../pages/AboutPage";
// import HomePage from "../pages/HomePage";
// import NewsPage from "../pages/CountryNewsPage";
// import SearchNewsPage from "../pages/SearchNewsPage";
// import CountryNews from "./CountryNews/CountryNews";
import SharedLayout from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const NewsPage = lazy(() => import("../pages/CountryNewsPage"));
const CountryNews = lazy(() => import("./CountryNews/CountryNews"));
const SearchNewsPage = lazy(() => import("../pages/SearchNewsPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/country-news" element={<NewsPage />}>
            <Route path=":country" element={<CountryNews />} />
          </Route>
          <Route path="/search-news" element={<SearchNewsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;

// Link -> <a></a> | navigate
