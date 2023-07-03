import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event: any) {
    event.preventDefault();

    const response = axios.post("http://localhost:8000/api/register", {
      name,
      email,
      password,
    });

    const data = (await response).data;
    if (data.status === "ok") {
      alert("Your account has been created");
      navigate("/login");
    } else if (data.status === "error") {
      alert("This email is already in use");
    }

    console.log(data);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
