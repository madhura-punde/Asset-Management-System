import React from "react";
import "./App.css";
import BarChart from "./Components/BarChart";
import Footer from "./Components/Common/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header";
import StageWise from "./Components/StageWise";

export const UserContext = React.createContext();

function App() {
  return (
    <>
      <UserContext.Provider value={"Madhura"}>
        <Header />
        <Routes>
          <Route path="/" element={<BarChart />} />
          <Route path="/:stagename" element={<StageWise />} />
        </Routes>
        <hr />
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
