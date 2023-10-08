import React, { useEffect, useState, useContext } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import stageDetails from "../Data/functionality";
import { UserContext } from "../../App";
import {
  optionsForHorizontalBarGraph,
  optionsForDoughnutGraph,
} from "../Data/GraphOptions";

function LeftContainer() {
  let [cardData, setCardData] = useState({});
  let [graphData, setGraphData] = useState({});
  let contextvalue = useContext(UserContext);

  useEffect(() => {
    const k = stageDetails();
    console.log(k);
    setGraphData(k.count);
    setCardData(k.counterForStage);
    // console.log(cardData);
    // console.log(graphData);
  }, []);

  useEffect(() => {
    // console.log(cardData);
    console.log(graphData);
    // ShowdataSet(cardData);
  }, [graphData, cardData]);

  const DisplayStagedDataWithNewSet = (key, value) => {
    // console.log(key, value);
    return (
      <Link to={`/${key}`} key={key} className="customCardClass">
        <div className="card" style={{ width: "20rem", height: "8rem" }}>
          <div className="card-body">
            <h5 className="card-title">{key}</h5>
            <h4 className="card-text">
              <p className="stageNumber">{value}</p>
            </h4>
          </div>
        </div>
      </Link>
    );
  };

  const ShowdataSet = (cardData) => {
    console.log(cardData);

    // for (const [key, value] of Object.entries(cardData)) {
    //   // console.log(`key: ${key}, value: ${value}`);
    //   <div className="displayStages">
    //     {DisplayStagedDataWithNewSet(key, value)}
    //   </div>;
    // }

    const newCardArray = Object.entries(cardData).map(([key, value]) => {
      return DisplayStagedDataWithNewSet(key, value);
    });

    return newCardArray;
  };

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

      <div className="displayStages">
        {!cardData ? <h4>"Loading"</h4> : ShowdataSet(cardData)}
      </div>

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
