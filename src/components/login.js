import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post("/api/login", { email, password });
      if (res.data) {
        //Handle successfull Login
        navigate.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          placeholder="Please enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label>Password : </label>
        <input
          type="password"
          value={password}
          placeholder="Please enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;