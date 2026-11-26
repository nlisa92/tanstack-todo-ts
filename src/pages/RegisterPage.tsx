import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
      <Link to="/login">Login</Link>
    </div>
  );
}

export default RegisterPage;
