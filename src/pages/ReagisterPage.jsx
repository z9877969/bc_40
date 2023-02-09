import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { registerUser } from "../redux/auth/authOperations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmt = (form) => {
    dispatch(registerUser(form));
  };

  return <AuthForm authType={"register"} btnTitle={"Register"} onSubmit={handleSubmt} />;
};

export default RegisterPage;
