import { useState } from "react";

const AuthForm = ({ onSubmit, btnTitle, authType }) => {
  const [form, setForm] = useState(
    authType === "login"
      ? { email: "", password: "" }
      : { email: "", password: "", confirmPassword: "" }
  );

  const { email, password, confirmPassword } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmt = (e) => {
    e.preventDefault();
    const { confirmPassword, ...userData } = form;
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmt}>
      <label>
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Input email..."
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type="text"
          name="password"
          value={password}
          placeholder="Input password..."
          onChange={handleChange}
        />
      </label>
      {authType === "register" && (
        <>
          <label>
            <p>ConfirmPassword</p>
            <input
              type="text"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Input password..."
              onChange={handleChange}
            />
          </label>
        </>
      )}
      <br />
      <button type="submit">{btnTitle}</button>
    </form>
  );
};

export default AuthForm;
