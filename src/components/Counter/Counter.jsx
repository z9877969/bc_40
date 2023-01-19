import { Component } from "react";
import s from "./Counter.module.css";

class Counter extends Component {
  state = {
    count: 200, // 150
    collection: [21], // 
    // isOpen: false // true
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 10 }));
    // this.setState((prevState) => ({ count: prevState.count - 10 }));
    // this.setState((prevState) => ({ count: prevState.count - 10 }));
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 25 }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log("RENDER");
    console.log("this.state.count :>> ", this.state.count);
    return (
      <div className={s.container}>
        <h1 className={s.title}>Counter</h1>
        <p className={s.count}>{this.state.count}</p>
        <div className={s.btnsWrapper}>
          <button
            className={s.btn}
            type="button"
            onClick={this.handleDecrement}
          >
            -
          </button>
          <button className={s.btn} type="button" onClick={this.handleReset}>
            0
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={this.handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
