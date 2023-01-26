import s from "./TodoItem.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { Component, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

// = (}) =>

const TodoItem = ({ title, id, date, priority, removeTodo }) => {
  const [count, setCount] = useState(30); // 30 29 28 27

  const intervalIdRef = useRef(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  const startCounter = () => {
    intervalIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  return (
    <li key={id} className={s.toDoItem}>
      <button
        onClick={() => {
          clearInterval(intervalIdRef.current);
        }}
      >
        Stop counter
      </button>
      <button onClick={startCounter}>Start counter</button>
      <p className={s.date}>{date}</p>
      <p className={s.date}>Counter - {count}</p>

      <h3 className={`${s.title} ${true && s.isDone}`}>{title}</h3>
      <p className={`${s.descr} ${true && s.isDone}`}>PRIORITY - {priority}</p>
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
};

export default TodoItem;
