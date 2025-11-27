import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage";
import BrokerListPage from "./pages/broker/Broker";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/broker"} element={<BrokerListPage />} />
      </Routes>
    </>
  );
}

export default App;
