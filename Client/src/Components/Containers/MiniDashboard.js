import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { SaveCountObject } from "../../redux";
import CustomSpinner from "../Common/CustomSpinner";

function MiniDashboard() {
  let [newData, setNewData] = useState({});
  let dispatch = useDispatch();

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_AssetData}assignmentGroupCounts`
        );
        const res = response.data;
        // console.log(response.data);
        setNewData(res);
        dispatch(SaveCountObject(res));
      } catch (e) {
        console.log(e);
      }
    };

    FetchData();
  }, []);

  const DisplayStagedDataWithNewSetNEW = (key, value) => {
    // console.log(key, value);
    return (
      <Link to={`/${key}`} key={key} className="customCardClass">
        <div className="card" style={{ width: "20rem", height: "8rem" }}>
          <div className="card-body">
            <h5 className="card-title">{key}</h5>
            <h4 className="card-text">
              <p className="stageNumber">{value.count}</p>
            </h4>
          </div>
        </div>
      </Link>
    );
  };

  const ShowdataSetNew = (cardData) => {
    // console.log(cardData);
    const newCardArray = Object.entries(cardData).map(([key, value]) => {
      return DisplayStagedDataWithNewSetNEW(key, value);
      // console.log(key, value.count);
    });

    return newCardArray;
  };

  return (
    <div>
      <br />
      <div className="displayStages">
        {!newData ? CustomSpinner() : ShowdataSetNew(newData)}
      </div>
    </div>
  );
}

export default MiniDashboard;
