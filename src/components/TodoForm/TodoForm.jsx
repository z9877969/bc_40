import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./TodoForm.module.scss";

const getCurDate = () => {
  const date = new Date();

  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

class ToDoForm extends Component {
  state = {
    date: getCurDate(),
    title: "",
    priority: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: uuidv4() });
  };

  render() {
    const { date, title, priority } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            name="date"
            type="date"
            value={date}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Title </span>
          <input
            className={s.input}
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </label>

        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              id="formRadioLow"
              className={s.input}
              type="radio"
              name="priority"
              value="low"
              checked={priority === "low"}
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioMedium"
              className={s.input}
              type="radio"
              name="priority"
              value="medium"
              checked={priority === "medium"}
              onChange={this.handleChange}
            />
            <label
              className={`${s.label} ${s.radio}`}
              htmlFor="formRadioMedium"
            >
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioHigh"
              className={s.input}
              type="radio"
              name="priority"
              value="high"
              checked={priority === "high"}
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
              High
            </label>
          </div>
        </div>
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    );
  }
}

export default ToDoForm;
