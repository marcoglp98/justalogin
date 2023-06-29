import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function goRegister() {
    navigate("/register");
  }

  async function loginUser(event: any) {
    event.preventDefault();

    const response = axios.post("http://localhost:8000/api/login", {
      email,
      password,
    });

    const data: any = (await response).data;
    console.log(data);
    if (data.user) {
      localStorage.setItem("token", data.user)
      navigate("/dashboard");
    } else {
      alert("Check your email and password");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
      <div>
        <p>
          You don't have an account?{" "}
          <span onClick={goRegister}>Register now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
