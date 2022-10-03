import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Ai from "./pages/Ai";

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<><Header /><SignUp /></>} />
    <Route path="/dashboard" element={<><Header /><Dashboard /></>} />
    <Route path="/login" element={<><Header/> <Login /></>} />
    <Route path="/Ai" element={<><Header/> <Ai /></>} />
    </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;