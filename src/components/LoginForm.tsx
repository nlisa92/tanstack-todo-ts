import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../api/authApi";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser({
        email,
        password,
      });

      console.log("Ответ сервера:", data);

      if (!data.access_token) {
        setError("Сервер не вернул токен авторизации");
        return;
      }

      localStorage.setItem("token", data.access_token);

      console.log("Токен сохранён:", !!localStorage.getItem("token"));

      navigate("/todos");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);

        setError(error.response?.data?.message || "Ошибка авторизации");
      } else {
        setError("Произошла неизвестная ошибка");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {error && <p role="alert">{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
