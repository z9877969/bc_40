import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.scss";

export const IsModalOpenContext = createContext();

const IsModalOpenProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <IsModalOpenContext.Provider
      value={{ isModalOpen, setIsModalOpen}}
    >
      {children}
    </IsModalOpenContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <IsModalOpenProvider>
    <App />
  </IsModalOpenProvider>
  // </React.StrictMode>
);

// const useForm = (initialValues) => {
//   const [form, setForm] = useState(initialValues);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   return { form, handleChange };
// };

// const Form = () => {
//   const { form, handleChange } = useForm({ title: "" });

//   return (
//     <form>
//       <input name="title" value={form.title} onChange={handleChange} />
//     </form>
//   );
// };

// const Form2 = () => {
//   const { form, handleChange } = useForm({
//     title: "",
//     title1: "",
//     title2: "",
//     title3: "",
//   });

//   return (
//     <form>
//       <input name="title" value={form.title} onChange={handleChange} />
//       <input name="title1" value={form.title1} onChange={handleChange} />
//       <input name="title2" value={form.title2} onChange={handleChange} />
//       <input name="title3" value={form.title3} onChange={handleChange} />
//     </form>
//   );
// };

// const fn = () => {
//   let a = 0;

//   const changeA = (n) => (a = n);

//   const showA = () => console.log(a);

//   return { changeA, showA };
// };

// const b = fn(); //  { changeA } -> lexEnv1
// const c = fn(); // { changeA, showA } -> lexEnv2

// b.changeA(2);
// c.changeA(25);
// c.showA();
// b.showA();
// b.changeA(5);
// b.showA();
