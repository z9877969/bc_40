import PropTypes from "prop-types";
import s from "./NewsList.module.scss";

// 10 + 10 ->

const NewsList = ({ news, newsItemRef, openModal }) => {
  return (
    <ul className={s.news}>
      {news.map((item, idx, arr) => (
        <li
          key={idx}
          className={s.item}
          ref={arr.length - 10 === idx ? newsItemRef : null}
          onClick={(e) => openModal({ url: item.url, title: item.title })}
        >
          <img className={s.img} src={item.urlToImage} alt="" />
          <div className={s.textWrapper}>
            <h3 className={s.title}>{item.title}</h3>
            <p className={s.author}>{item.author}</p>
            <p className={s.date}>{item.publishedAt}</p>
            <p className={s.descr}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
