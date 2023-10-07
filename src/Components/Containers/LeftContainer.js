import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { stageData } from "../Data/stages";
import { Link } from "react-router-dom";
import stageDetails from "../Data/functionality";

import {
  dataForTotalAssets,
  OptionForTotalAssets,
  dataForD,
  dataForHBar,
  optionsForHBar,
} from "../Data/Rawdata";

function LeftContainer() {
  let [cardData, setCardData] = useState(0);
  let [graphData, setGraphData] = useState({});

  useEffect(() => {
    const k = stageDetails();
    console.log(k);
    setGraphData(k.count);
    setCardData(k.counterForStage);
    console.log(cardData);
    console.log([graphData]);
  }, []);

  const DisplayStagedData = stageData.map((data, i) => {
    return (
      <Link to={`/${data.stage_name}`} key={i} className="customCardClass">
        <div
          className="card"
          style={{ width: "20rem", height: "8rem" }}
          key={data.stage_name}
        >
          <div className="card-body">
            <h5 className="card-title">{data.stage_name}</h5>
            <h4 className="card-text">
              <p className="stageNumber">{data.totalNumberOfAssets}</p>
            </h4>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <br />

      <section className="displayStages">{DisplayStagedData}</section>

      <div className="chart">
        <Bar data={dataForTotalAssets} options={OptionForTotalAssets} />
        <Bar options={optionsForHBar} data={dataForHBar} />
      </div>
    </>
  );
}

export default LeftContainer;
