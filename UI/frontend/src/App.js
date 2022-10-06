import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./pages/js/Header";
import SignUp from "./pages/js/signup";
import Login from "./pages/js/login";
import Ai from "./pages/js/Ai";
import NotFound from "./pages/js/Notfound";
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    
    <ChakraProvider>
    <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<><Header /><SignUp /></>} />
    <Route path="/login" element={<><Header/> <Login /></>} />
    <Route path="/Ai" element={<><Header/> <Ai /></>} />
    <Route path="*" element={<NotFound />} /> */}
    <Route path="/" element={<><SignUp /></>} />
    <Route path="/login" element={<> <Login /></>} />
    <Route path="/Ai" element={<> <Ai /></>} />
    <Route path="*" element={<NotFound />} />
    </Routes>
      
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;