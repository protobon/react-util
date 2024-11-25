import { useState } from "react";
import { useLogin } from "../../../hooks/Auth/useLogin";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutateAsync: login} = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await login(
        { email, password },
        {
          onSuccess: (data) => {
              console.log("Login successful!", data);
              navigate("/home");
          },
          onError: (error) => {
              console.error("Login failed.", error);
          },
        }
      );
    } else {
      alert("please provide a valid input");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
      />
      <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">
          Login
      </button>
    </form>
  );
};
