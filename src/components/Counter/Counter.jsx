import { useSelector, useDispatch } from "react-redux";
import {
  countDecrementAction,
  countIncrementAction,
  countResetAction,
} from "../../redux/count/countActions";
import s from "./Counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(countDecrementAction(100))}
        >
          -
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(countResetAction())}
        >
          0
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(countIncrementAction(25))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
