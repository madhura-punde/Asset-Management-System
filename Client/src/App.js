import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Common/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header";
import StageWise from "./Components/Containers/StageWise";
import store from "./redux/store";
import { Provider } from "react-redux";
import AssetDetails from "./Components/Containers/AssetDetails";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:stagename" element={<StageWise />} />
          <Route path="/:stagename/:assetid" element={<AssetDetails />} />
        </Routes>
        <br />
        <ToastContainer />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
