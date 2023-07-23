import React from "react";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { StoreProvider } from "easy-peasy";
import store from "./GlobalCounter";
import NotFound from "./components/NotFound";

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/edit/:id" Component={Edit} />
          {/* Default route, rendering NotFound component */}
          <Route path="/*" Component={NotFound} />
        </Routes>
        <ToastContainer />
      </Router>
    </StoreProvider>
  );
}

export default App;
