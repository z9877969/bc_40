import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { loginUser } from "../redux/auth/authOperations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (form) => {
    dispatch(loginUser(form));
  };

  return (
    <AuthForm authType={"login"} btnTitle="Login" onSubmit={handleSubmit} />
  );
};

export default LoginPage;
