import { useState, type FormEvent } from "react";
import axios from "axios";
import { registerUser } from "../api/authApi";

const RegisterForm = () => {
  const [login, setLogin] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      await registerUser({
        login,
        email,
        password,
        age: Number(age),
        gender,
      });

      setSuccess("User created successfully!");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message || "Registration error"
        );
      } else {
        setError("Unknown error");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />

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

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="">Choose gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        min="1"
      />

      {error && <p role="alert">{error}</p>}
      {success && <p role="status">{success}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
