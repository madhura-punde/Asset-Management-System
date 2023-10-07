import React from "react";
import "./App.css";
import BarChart from "./Components/BarChart";
import Footer from "./Components/Common/Footer";
import { Routes, Route } from "react-router";
import Header from "./Components/Common/Header";
import StageWise from "./Components/StageWise";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BarChart />} />
        <Route path="/:stagename" element={<StageWise />} />
      </Routes>
      <hr />
      <Footer />
    </>
  );
}

export default { App };
