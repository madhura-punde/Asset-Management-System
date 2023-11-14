import React, { useEffect } from "react";
import "./Styles/dashboard.css";
import FilterSection from "./Containers/FilterSection";
import Visualization from "./Containers/Visualization";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SaveData } from "../redux";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
import MiniDashboard from "./Containers/MiniDashboard";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// ChartJS.register(ArcElement, Tooltip, Legend);

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_AssetData}asset-data`
        );
        const res = response.data;
        console.log(res.Data);
        dispatch(SaveData(res.Data));
      } catch (e) {
        console.log(e);
      }
    };
    FetchData();
  });

  return (
    <>
      <section className="container">
        <div className="row">
          <section className="col-lg-3">
            <br />
            <FilterSection />
          </section>

          {/* main dashboar */}
          <section className="col-lg-9">
            <MiniDashboard />
            <br />
            <p>
              <b>
                Planning-&gt; Procurement- &gt; Distribution-&gt;
                Operations-&gt; Maintenance-&gt; Disposal
              </b>
            </p>
            <Visualization />
          </section>
        </div>
      </section>
    </>
  );
}

export default HomePage;
