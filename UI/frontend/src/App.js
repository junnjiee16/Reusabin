import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/js/Header";
import SignUp from "./pages/js/signup";
import Login from "./pages/js/login";
import Ai from "./pages/js/Ai";

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<><Header /><SignUp /></>} />
    <Route path="/login" element={<><Header/> <Login /></>} />
    <Route path="/Ai" element={<><Header/> <Ai /></>} />
    </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;