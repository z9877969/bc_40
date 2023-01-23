import s from "./TodoItem.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { Component } from "react";

// = (}) =>
class TodoItem extends Component {
  state = {
    count: 15,
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log("interval");
      this.setState((prev) => ({ count: prev.count - 1 }));
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.count <= 0) {
      clearInterval(this.intervalId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { title, id, date, priority, removeTodo } = this.props;
    const { count } = this.state;
    return (
      <li key={id} className={s.toDoItem}>
        <p className={s.date}>{date}</p>
        <p className={s.date}>Counter - {count}</p>

        <h3 className={`${s.title} ${true && s.isDone}`}>{title}</h3>
        <p className={`${s.descr} ${true && s.isDone}`}>
          PRIORITY - {priority}
        </p>
        <label className={s.status}>
          <input type="checkbox" name="status" />
          Done
        </label>
        <button
          className={s.todoBtn}
          onClick={() => {
            removeTodo(id);
          }}
        >
          <svg className={s.icon}>
            <use href={sprite + "#icon-trash"}></use>
          </svg>
        </button>
        <button
          className={s.todoBtn}
          onClick={() => {
            console.log("Edit");
          }}
        >
          <svg className={s.icon}>
            <use href={sprite + "#icon-edit-pencil"}></use>
          </svg>
        </button>
      </li>
    );
  }
}

export default TodoItem;
