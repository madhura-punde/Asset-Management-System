import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { stageDetailsTRY } from "../Data/functionality";

function RightContainerR() {
  let [cardData, setCardData] = useState({});
  let [
    procurementCount,
    maintainenceCount,
    operationsCount,
    distributionCount,
    disposalCount,
    planningCount,
    assetDataTaken,
  ] = useSelector((state) => [
    state.procurementCOunt,
    state.maintainenceCOunt,
    state.operationsCOunt,
    state.distributionCOunt,
    state.disposalCOunt,
    state.planningCOunt,
    state.assetData,
  ]);

  useEffect(() => {
    console.log(assetDataTaken);
    const data = stageDetailsTRY(assetDataTaken);
    // console.log(data);
    setCardData(data.counterForStage);
  }, []);

  useEffect(() => {
    console.log(cardData);
    // console.log(graphData);
  }, [cardData]);

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

    const newCardArray = Object.entries(cardData).map(([key, value]) => {
      return DisplayStagedDataWithNewSet(key, value);
    });

    return newCardArray;
  };

  return (
    <div>
      {/* <p>Procurement {procurementCount}</p>
      <p>Disposal {disposalCount}</p>
      <p>Distribution {distributionCount}</p>
      <p>Maintainence {maintainenceCount}</p>
      <p>Operations {operationsCount}</p>
      <p>Planning {planningCount}</p> */}
      <br />

      <div className="displayStages">
        {!cardData ? <h4>"Loading"</h4> : ShowdataSet(cardData)}
      </div>
    </div>
  );
}

export default RightContainerR;
