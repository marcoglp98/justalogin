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
      localStorage.setItem("token", data.user);
      navigate("/dashboard");
    } else {
      alert("Check your email and password");
    }
  }

  return (
    <div className="text-center bg-blue-400 sm:mt-10 sm:rounded-xl">
      <div>
        <h1 className="p-5 text-bold text-4xl border-bottom bg-green-400 sm:rounded-lg  font-serif">
          Login
        </h1>
      </div>
      <form
        onSubmit={loginUser}
        className="p-10 sm:w-[60vw] xl:w-[45vw] min-w[600px]"
      >
        <input
          className="rounded-xl p-2 w-[60vw] xl:max-w-[800px] font-serif m-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          className="rounded-xl p-2 w-[60vw] xl:max-w-[800px] font-serif m-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input
          className="mt-5 xl:ml-[260px] 2xl:ml-[60px] inline-block rounded-full bg-yellow-300 px-6 pb-2 pt-2.5 text-base font-serif"
          type="submit"
          value="Login"
        />
      </form>
      <div>
        <p className="text-xl font-serif">
          You don't have an account?{" "}
          <span className="text-orange-500 hover:underline" onClick={goRegister}>Register now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
