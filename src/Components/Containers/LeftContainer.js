import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Bar, Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import stageDetailsTRY from "../Data/functionality";
import { UserContext } from "../../App";
import {
  optionsForHorizontalBarGraph,
  optionsForDoughnutGraph,
} from "../Data/GraphOptions";

function LeftContainer() {
  let [cardData, setCardData] = useState({});
  let [graphData, setGraphData] = useState({});
  let assetDataTaken = useSelector((state) => state.assetData);
  // let contextvalue = useContext(UserContext);

  useEffect(() => {
    const k = stageDetailsTRY(assetDataTaken);
    console.log(k);
    setGraphData(k.count);
    setCardData(k.counterForStage);
    // console.log(cardData);
    // console.log(graphData);
  }, []);

  // useEffect(() => {
  //   // console.log(cardData);
  //   console.log(graphData);
  //   // ShowdataSet(cardData);
  // }, [graphData, cardData]);

  // Bar graph data

  const labels = Object.keys(cardData);
  const actualData = Object.values(cardData);

  const dataForHBarnew = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: actualData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const labels1 = Object.keys(graphData);
  const actualData1 = Object.values(graphData);

  const dataD = {
    labels: labels1,
    datasets: [
      {
        label: "Tangible Vs InTangible Assets",
        data: actualData1,
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  return (
    <>
      <br />

      <div className="chart">
        <Doughnut data={dataD} options={optionsForDoughnutGraph} />
        <Bar options={optionsForHorizontalBarGraph} data={dataForHBarnew} />
      </div>

      {/*1. Render Prop Pattern
       <UserContext.Consumer>
        {(user) => {
          return <div>User Context value {user}</div>;
        }}
      </UserContext.Consumer> */}

      {/*2. With use of usecontext API */}

      {/* {contextvalue} */}
    </>
  );
}

export default LeftContainer;
