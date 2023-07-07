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
    <div className="text-center bg-blue-400 sm:mt-10 sm:rounded-xl">
      <div>
        <h1 className="p-5 text-bold text-4xl border-bottom bg-green-400 sm:rounded-lg font-serif">
          Register
        </h1>
      </div>
      <form
        className="flex flex-col p-10 sm:w-[60vw] xl:w-[45vw] min-w[600px]"
        onSubmit={registerUser}
      >
        <input
          className="rounded-xl p-2 w-[60vw] xl:max-w-[800px] font-serif m-5"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
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
          className="mt-5 xl:ml-[340px]  ml-[80px]  max-w-[150px] inline-block rounded-full bg-yellow-300  pb-2 pt-2.5 text-base font-serif"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
