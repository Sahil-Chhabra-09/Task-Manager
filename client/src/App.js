import React from "react";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { StoreProvider } from "easy-peasy";
import store from "./GlobalCounter";

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/edit/:id" Component={Edit} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
