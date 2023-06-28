import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return <BrowserRouter>
  <Routes>
  <Route path="/login" Component={Login}></Route>
  <Route path="/register" Component={Register}></Route>
  </Routes>
  </BrowserRouter>;
};

export default App;
