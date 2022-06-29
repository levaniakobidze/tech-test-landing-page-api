import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Employees from "./Pages/Employees/Employees";
import SingleEmployee from "./Pages/SingleEmplye/SingleEmployee";
import Feedback from "./Pages/Feedback/Feedback";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/employees"} element={<Employees />} />
        <Route path={"/singleEmployee/:ID"} element={<SingleEmployee />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
