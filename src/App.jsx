import { Routes, Route } from "react-router-dom";
import Homer from "./components/Homer";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <> 
      
      <Routes>
        <Route path="/" element={<Homer />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;