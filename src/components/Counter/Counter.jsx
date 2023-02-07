import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/count/countSlice";
import { getFilter } from "../../redux/todo/todoSelectors";
import s from "./Counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  // const filter = useSelector(getFilter); // state => state.todo.filter

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(decrement(100))}
        >
          -
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(reset())}
        >
          0
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(increment(25))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
