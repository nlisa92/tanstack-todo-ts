import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm/>
      <Link to={"/register"}>Register</Link>
    </div>
  );
}

export default LoginPage;