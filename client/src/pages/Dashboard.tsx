import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  function logOut() {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  });

  return (
    <div className=" justify-center text-center bg-blue-400 sm:mt-5 sm:mb-10 sm:rounded-xl">
      <div>
        <h1 className="p-5 text-bold text-4xl border-bottom bg-green-400 sm:rounded-lg font-serif">
          Well done!
        </h1>
      </div>
      <div className=" h-[400px] sm:ml-[200px] ml-[30px] mb-[100px] mt-[20px]">
        <img
          className="min-w-sm"
          src={require("../resources/success.gif")}
        ></img>
      </div>
      <div className="mt">
        <button
          className="mt-10 mb-5  2xl:ml-[30px] inline-block rounded-full bg-yellow-300 px-6 pb-2 pt-2.5 text-base font-serif"
          onClick={logOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
