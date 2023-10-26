import React from "react";
import "./Styles/dashboard.css";
import RightContainer from "./Containers/ RightContainer";
import LeftContainer from "./Containers/LeftContainer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import RightContainerR from "./Containers/RightContainerR";

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

function BarChart() {
  return (
    <>
      <section className="container">
        <div className="row">
          <section className="col-lg-3">
            <br />
            <RightContainer />
          </section>

          {/* main dashboar */}
          <section className="col-lg-9">
            <RightContainerR />
            <LeftContainer />
          </section>
        </div>
      </section>
    </>
  );
}

export default BarChart;
