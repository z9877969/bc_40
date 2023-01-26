import { Component, useState } from "react";
import TodoPage from "../TodoPage/TodoPage";

const App = () => {
  const [theme, setTheme] = useState("light"); // theme = "dark"
  // const [count, setCount] = useState(0);

  const toggleTheme = () => {
    // setTheme("dark");
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // const changeCount = () => {
  //   setCount(prevCount => prevCount + 5); // 0 + 5 -> prevCount = 5 count = 5
  //   setCount(prevCount => prevCount + 5); // 0 + 5 -> prevCount = 10 count = 10
  //   setCount(prevCount => prevCount + 5); // 0 + 5 -> prevCount = 15 count = 15
  // };

  console.log("theme :>> ", theme);

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
      {/* <button onClick={changeCount}>Count - {count}</button> */}
      <TodoPage theme={theme} />
    </>
  );
};

export default App;
