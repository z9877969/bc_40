import { Component } from "react";
import TodoPage from "../TodoPage/TodoPage";

class App extends Component {
  state = {
    theme: "light", // dark
    isOpen: false,
  };
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState((prev) => ({
              theme: prev.theme === "light" ? "dark" : "light",
            }));
          }}
        >
          Click
        </button>
        <button
          onClick={() => {
            this.setState((prev) => ({
              isOpen: !prev.isOpen,
            }));
          }}
        >
          Open
        </button>
        <TodoPage theme={this.state.theme} />
      </>
    );
  }
}

export default App;
