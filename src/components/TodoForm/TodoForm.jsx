import { useState } from "react";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./TodoForm.module.scss";

const getCurDate = () => {
  const date = new Date();

  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

const options = [
  {
    label: "Date",
    name: "date",
    type: "date",
    placeholder: null,
  },
  {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Input title",
  },
  {
    label: "Priority",
    name: "priority",
    type: "radio",
    placeholder: null,
  },
];

const TodoForm = ({ addTodo, options }) => {
  // const [date, setDate] = useState(getCurDate());
  // const [title, setTitle] = useState("");
  // const [priority, setPriority] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case "date":
  //       setDate(value);
  //       break;
  //     case "title":
  //       setTitle(value);
  //       break;
  //     case "priority":
  //       setPriority(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };
  const [form, setForm] = useState({
    date: getCurDate(),
    title: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo({ date: date, title: title, priority: priority, id: uuidv4() });
    addTodo({ ...form, id: uuidv4() });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {/* {options.map((option) => (
        <label className={s.label}>
          <span> {option.label} </span>
          <input
            className={s.input}
            name={option.name}
            type={option.type}
            value={form[option.name]}
            // form = {date, title, priority}
            onChange={handleChange}
          />
        </label>
      ))} */}
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Title </span>
        <input
          className={s.input}
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
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
            checked={form.priority === "low"}
            onChange={handleChange}
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
            checked={form.priority === "medium"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioMedium">
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
            checked={form.priority === "high"}
            onChange={handleChange}
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
};

// class ToDoForm extends Component {
//   state = {
//     date: getCurDate(),
//     title: "",
//     priority: "",
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addTodo({ ...this.state, id: uuidv4() });
//   };

//   render() {
//     const { date, title, priority } = this.state;

//   }
// }

export default TodoForm;
