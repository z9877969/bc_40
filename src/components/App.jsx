import { Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import CountryNews from "./CountryNews/CountryNews";
import SharedLayout from "./SharedLayout/SharedLayout";

// homePage -> /home
// aboutPage -> /about
// newsPage -> /news

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />}>
            <Route path=":country" element={<CountryNews />} />
            {/* <Route path="ua" element={<h2>News UA</h2>} />
          <Route path="fr" element={<h2>News FR</h2>} />
          <Route path="pl" element={<h2>News PL</h2>} />
          <Route path="us" element={<h2>News US</h2>} /> */}
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
