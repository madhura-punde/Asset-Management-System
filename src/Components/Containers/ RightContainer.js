import React, { useEffect, useState } from "react";
import { sampleData } from "../Data/sample";
import { useNavigate } from "react-router-dom";

function RightContainer() {
  const [group, setGroup] = useState();
  const navigate = useNavigate();

  const navigateWithSomeOption = (event) => {
    setGroup(event.target.value);
    console.log(event.target.value);
    navigate(`/${event.target.value}`);
  };

  const generateOptions = (optionName) => {
    const AG = [...new Set(sampleData.map((item) => item[optionName]))];
    return AG.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
  };

  return (
    <>
      <aside className="mini-left-block">
        <div className="container">
          <br />
          <div>Filter</div>

          <select onChange={navigateWithSomeOption}>
            <option>Select Location</option>
            {generateOptions("Physical Location")}
          </select>

          <br />
          <br />

          <label>Select Asset Type</label>
          <br />
          <select onChange={navigateWithSomeOption}>
            <option>Asset Type </option>
            <option>Hardware</option>
            <option>Software</option>
          </select>

          <br />
          <br />

          <label>Select Department</label>
          <div className="dropdown">
            <select onChange={navigateWithSomeOption}>
              <option>Select Department</option>
              {generateOptions("Department")}
            </select>
          </div>

          <br />
          {/* Assignment Group DropDown */}
          <label>Select Assignment Group</label>

          <div className="dropdown">
            <select value={group} onChange={navigateWithSomeOption}>
              <option>Select Assignment Group</option>

              {generateOptions("Assignment Group")}
            </select>
          </div>
          <br />
          <label>Asset ID</label>

          <br />
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Asset ID"
              aria-label="AssetID"
              aria-describedby="basic-addon1"
              name="assetID"
              minLength={20230001}
              maxLength={20240001}
            />
          </div>

          <span>Serial Number</span>
          <br />
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Serial Number"
              aria-label="AssetID"
              aria-describedby="basic-addon1"
              name="SerialNumber"
              minLength={9}
              maxLength={9}
            />
          </div>

          <br />
        </div>
      </aside>
    </>
  );
}

export default RightContainer;
