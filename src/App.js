import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import ProductDetail from "./pages/ProductDetail";
import RequireAuth from "./components/base/RequireAuth";
import UserContext from "./context/UserContext";
// export const userContext = createContext(null);

const App = () => {
 
  return (
    
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route
            path="/product/:id"
            element={
              <RequireAuth>
                <ProductDetail />
              </RequireAuth>
            }
          />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
