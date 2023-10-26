import React from "react";
import "./App.css";
import BarChart from "./Components/BarChart";
import Footer from "./Components/Common/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header";
import StageWise from "./Components/StageWise";
import store from "./redux/store";
import { Provider } from "react-redux";
import AssetDetails from "./Components/Containers/AssetDetails";

export const UserContext = React.createContext();

function App() {
  return (
    <>
      {/* <UserContext.Provider value={"Madhura"}> */}
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<BarChart />} />
          <Route path="/:stagename" element={<StageWise />} />
          <Route path="/:stagename/:assetid" element={<AssetDetails />} />
        </Routes>
        <hr />
        <Footer />
      </Provider>
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;
