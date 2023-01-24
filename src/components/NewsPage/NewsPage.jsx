import { createRef } from "react";
import Button from "../Button/Button";
import NewsList from "../NewsList/NewsList";
import Modal from "../Modal/Modal";
// import news from "../../data/news.json";
import { Component } from "react";
import { getSearchedNewsApi } from "../../utils/newsApi";

class NewsPage extends Component {
  state = {
    news: [],
    page: 1, // 7 -> 1
    query: "", // cat -> dog
    error: null,
    isLoading: false,
    isModalOpen: false, // true
    modalData: null, // data
  };

  newsItemRef = createRef();

  static getDerivedStateFromProps(newProps, state) {
    if (newProps.query !== state.query) {
      return { page: 1, query: newProps.query };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    // props -> query
    if (prevProps.query !== this.props.query) {
      this.getSeagchedNews();
    }

    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.getSeagchedNews();
    }

    if (this.state.news !== prevState.news) {
      // scroll
      console.log("newsItemRef :>> ", this.newsItemRef);
      this.newsItemRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }

  getSeagchedNews = async () => {
    this.setState({ isLoading: true });
    try {
      const data = await getSearchedNewsApi(this.props.query, this.state.page);
      this.setState((prev) => ({
        news:
          this.state.page === 1
            ? data.articles
            : [...prev.news, ...data.articles],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  updatePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  openModal = (modalData) => {
    // modalData = {url, title}
    this.setState({ modalData });
  };

  closeModal = () => {
    this.setState({ modalData: null });
  };

  render() {
    const { error, news, isLoading, modalData } = this.state;

    if (error) return <h1>{error}</h1>;
    return (
      <>
        <NewsList
          news={news}
          newsItemRef={this.newsItemRef}
          openModal={this.openModal}
        />
        {isLoading && <h1>Loading...</h1>}

        {news.length > 0 && <Button onClick={this.updatePage} />}
        {modalData && (
          <Modal modalData={modalData} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default NewsPage;
