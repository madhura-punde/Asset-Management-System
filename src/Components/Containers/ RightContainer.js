import React from "react";
import { sampleData } from "../Data/sample";

function RightContainer() {
  // const AG = [...new Set(sampleData.map((item) => item["Assignment Group"]))];
  // const DEPT = [...new Set(sampleData.map((item) => item.Department))];
  // console.log({ AG, DEPT });

  // const OptionsForDropDown = (optionName) => {
  //   const AG = [...new Set(sampleData.map((item) => item[optionName]))];

  //   return AG.map((item, index) => (
  //     <li key={index}>
  //       <a className="dropdown-item" href="#">
  //         {item}
  //       </a>
  //     </li>
  //   ));
  // };

  // const generateOptions = (optionName) => {
  //   const AG = [...new Set(sampleData.map((item) => item[optionName]))];
  //   return AG.map((item, index) => (
  //     <option key={index} value={item}>
  //       {item}
  //     </option>
  //   ));
  // };

  return (
    <>
      <aside className="mini-left-block">
        <div className="container">
          <div>Filter</div>

          <select className="">
            <option>Select Location</option>
            {/* {generateOptions("Physical Location")} */}
          </select>

          <br />

          <label>Select Asset Type</label>
          <br />
          <select className="">
            <option>Asset Type </option>
            <option>Hardware</option>
            <option>Software</option>
          </select>
          <br />

          <label>Select Department</label>
          <div className="dropdown">
            <select className="">
              <option>Select Department</option>
              {/* {generateOptions("Department")} */}
            </select>
          </div>
          <br />

          <label>Select Assignment Group</label>
          <div className="dropdown">
            <select className="">
              <option>Select Assignment Group</option>
              {/* {generateOptions("Assignment Group")} */}
            </select>
          </div>

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
