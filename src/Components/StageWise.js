import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStagewiseData } from "./Data/functionality";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function StageWise() {
  let { stagename } = useParams();
  let [tableData, setData] = useState();
  let assetDataGeneric = useSelector((state) => state.assetData);

  useEffect(() => {
    // console.log({ stagename, assetDataGeneric });
    let stageWise = getStagewiseData(stagename, assetDataGeneric);
    // console.log(stageWise);
    setData(stageWise);
  }, []);

  let showTableInDetail = (asset) => {
    return (
      <tr key={asset["Asset ID"]}>
        <td>
          <Link to={`/${stagename}/${asset["Asset ID"]}`}>
            {asset["Asset ID"]}
          </Link>
        </td>
        <td>{asset["Hostname"]}</td>
        <td>{asset["Assignment Group"]}</td>

        <td>{asset["Department"]}</td>
        <td>{asset["Category"]}</td>
        <td>{asset["Serial Number"]}</td>
        <td>{asset["Monitoring Status"]}</td>
        <td>{asset["Compliance Status"]}</td>
        <td>{asset["Manufacturer"]}</td>

        <td>{asset["Physical Location"]}</td>
      </tr>
    );
  };

  return (
    <div className="container">
      StageWise class
      <br />
      <div>
        {!tableData ? (
          "Loading"
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Asset ID</th>
                <th>Hostname</th>
                <th>Assignment Group</th>

                <th>Department</th>
                <th>Category</th>
                <th>Serial Number</th>
                <th>Monitoring Status</th>
                <th>Compliance Status</th>
                <th>Manufacturer</th>

                <th>Location</th>
              </tr>
            </thead>
            <tbody>{tableData.map((item) => showTableInDetail(item))}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default StageWise;
