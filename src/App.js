import React from "react";
import Button from "./components/base/Button";
import style from "./components/base/Button/button.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="/*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
