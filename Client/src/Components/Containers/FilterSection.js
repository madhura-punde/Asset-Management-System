import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function FilterSection() {
  const [group, setGroup] = useState();
  const [assetId, setassetId] = useState();
  const [serialNo, setSerialNo] = useState();

  const navigate = useNavigate();
  let assetDataGeneric = useSelector((state) => state.assetData);

  useEffect(() => {
    assetDataGeneric && console.log(assetDataGeneric);
  }, [assetDataGeneric]);

  const navigateWithSomeOption = (event) => {
    setGroup(event.target.value);
    console.log(event.target.value);
    navigate(`/${event.target.value}`);
  };

  const generateOptions = (optionName) => {
    const AG = [...new Set(assetDataGeneric.map((item) => item[optionName]))];
    return AG.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
  };

  const HandleThisSearch = (event) => {
    event.preventDefault();

    alert(`The name you entered was: ${assetId} ${serialNo}`);
  };

  return (
    <>
      <aside className="mini-left-block">
        <div className="container">
          <br />
          <div>Filter</div>

          <select onChange={navigateWithSomeOption}>
            <option>Select Location</option>
            {generateOptions("physicalLocation")}
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
              {generateOptions("department")}
            </select>
          </div>

          <br />
          {/* Assignment Group DropDown */}
          <label>Select Assignment Group</label>

          <div className="dropdown">
            <select value={group} onChange={navigateWithSomeOption}>
              <option>Select Assignment Group</option>

              {generateOptions("assignmentGroup")}
            </select>
          </div>
          <br />
          <label>Asset ID</label>

          <br />
          <form onSubmit={HandleThisSearch}>
            <div className="input-group mb-3">
              <input
                type="number"
                value={assetId}
                className="form-control"
                placeholder="Asset ID"
                aria-label="AssetID"
                aria-describedby="basic-addon1"
                name="assetID"
                onChange={(e) => setassetId(e.target.value)}
                required
              />
            </div>

            <span>Serial Number</span>

            <div className="input-group mb-3">
              <input
                type="text"
                value={serialNo}
                className="form-control"
                placeholder="Serial Number"
                aria-label="AssetID"
                aria-describedby="basic-addon1"
                name="SerialNumber"
                minLength={9}
                maxLength={9}
                onChange={(e) => setSerialNo(e.target.value)}
              />
            </div>
            <input type="submit" />
          </form>

          <br />
        </div>
      </aside>
    </>
  );
}

export default FilterSection;
