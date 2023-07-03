import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { decodeToken, useJwt } from "react-jwt";

const Dashboard = () => {
  const navigate = useNavigate();

  function logOut() {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);
      alert(user);
    } else if (!token) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  });

  return (
    <div>
      <h1>Well done</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Dashboard;
