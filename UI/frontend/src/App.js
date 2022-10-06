import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./pages/js/Header";
import SignUp from "./pages/js/signup";
import Login from "./pages/js/login";
import Ai from "./pages/js/Ai";
import NotFound from "./pages/js/Notfound";
import { ChakraProvider } from '@chakra-ui/react'
import Hero from "./pages/js/Hero.tsx";
import Nav from "./pages/js/Nav.tsx";
import Stat from './pages/js/Stats.tsx'
import Content from "./pages/js/content.tsx";

const App = () => {
  return (
    
    <ChakraProvider>
    <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<><Header /><SignUp /></>} />
    <Route path="/login" element={<><Header/> <Login /></>} />
    <Route path="/Ai" element={<><Header/> <Ai /></>} />
    <Route path="*" element={<NotFound />} /> */}
    <Route path="/" element={<><Nav /> <Hero /> <Stat /> <Content /></>} />
    <Route path="/signup" element={<><SignUp /></>} />
    <Route path="/login" element={<><Nav /><Login /></>} />
    <Route path="/Ai" element={<> <Nav /> <Ai /></>} />
    <Route path="*" element={<><Nav /><NotFound /></>} />
    </Routes>
      
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;