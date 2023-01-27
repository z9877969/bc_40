import { useState, useContext } from "react";
import { IsModalOpenContext } from "../..";
import TodoPage from "../TodoPage/TodoPage";
// import { useToggle } from "../../hooks/useToggle";

const App = () => {
  const [theme, setTheme] = useState("light"); // theme = "dark"
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const { setIsModalOpen } = useContext(IsModalOpenContext);


  const toggleTheme = () => {
    // setTheme("dark");
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
      <button onClick={() => setIsModalOpen((prev) => !prev)}>
        Modal toggle
      </button>
      <TodoPage theme={theme} />
    </>
  );
};

export default App;
