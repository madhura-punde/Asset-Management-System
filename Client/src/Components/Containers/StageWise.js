import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStagewiseData } from "../Data/functionality";
import CustomSpinner from "../Common/CustomSpinner";

function StageWise() {
  let { stagename } = useParams();
  let [tableData, setData] = useState();
  let [assetDataGeneric, countObject] = useSelector((state) => [
    state.assetData,
    state.countObjForGraph,
  ]);

  useEffect(() => {
    console.log(getStagewiseData(stagename, assetDataGeneric));
    console.log({ stagename, assetDataGeneric, countObject });
    setData(getStagewiseData(stagename, assetDataGeneric));
  }, [assetDataGeneric, countObject]);

  let showTableInDetail = (asset) => {
    return (
      <tr key={asset["assetID"]}>
        <td>
          <Link to={`/${stagename}/${asset["assetID"]}`}>
            {asset["assetID"]}
          </Link>
        </td>
        <td>{asset["hostname"]}</td>
        <td>{asset["assignmentGroup"]}</td>

        <td>{asset["department"]}</td>
        <td>{asset["category"]}</td>
        <td>{asset["serialNumber"]}</td>
        <td>{asset["monitoringStatus"]}</td>
        <td>{asset["complianceStatus"]}</td>
        <td>{asset["manufacturer"]}</td>

        <td>{asset["physicalLocation"]}</td>
      </tr>
    );
  };

  return (
    <div className="container">
      <br />
      <div>
        {!tableData ? (
          CustomSpinner()
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
