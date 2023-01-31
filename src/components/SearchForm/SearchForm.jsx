import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import s from "./SearchForm.module.scss";

const SearchForm = ({ onSubmit }) => {
  // const navigate = useNavigate();
  // const location = useLocation();
  const [search, setSearch] = useSearchParams();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(input);
    // navigate({ ...location, search: `query=${input}` });
    setSearch({query: input, page: 1})
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="input"
        value={input}
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
