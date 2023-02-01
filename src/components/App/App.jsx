import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import TodoPage from "../../pages/TodoPage";
import CounterPage from "../../pages/CounterPage";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="*" element={<Navigate to={"/counter"} />} />
      </Routes>
    </>
  );
};

export default App;
