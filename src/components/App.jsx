import { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import NewsPage from "./NewsPage/NewsPage";


class App extends Component {
  state = {
    query: "",
  };

  changeQuery = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div className="App">
        <header>
          <SearchForm onSubmit={this.changeQuery} />
        </header>
        <NewsPage query={this.state.query} />
        
      </div>
    );
  }
}

export default App;

// const c = 21;
// const e = [];

// const obj = {
//   a: 54,
//   b: true,
//   c,
//   d: 65,
//   e
// }

// const {a: a, b} = obj
