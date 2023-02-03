import { memo } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../../hooks/useLocalStorage";
// import { addTodo } from "../../redux/todo/todoActions";
import { add } from "../../redux/todo/todoSlice";
import s from "./TodoForm.module.scss";

const getCurDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

const TodoForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useLocalStorage("todoForm", {
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
    // dispatch(add(form)); // with prepare in todoSlice
    dispatch(add({ ...form, id: uuidv4() }));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
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

export default memo(TodoForm); // () => {condition + memo return <TodoForm />} + memo
