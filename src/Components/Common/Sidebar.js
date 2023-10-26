import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { stageDetailsTRY } from "../Data/functionality";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar() {
  const [stageOptions, setOptions] = useState({});
  const stageData = useSelector((state) => state.assetData);

  useEffect(() => {
    const { counterForStage } = stageDetailsTRY(stageData);
    // console.log(Object.keys(counterForStage));
    setOptions(Object.keys(counterForStage));
  }, []);

  const displayStagesInList = () => {
    stageOptions.map((optionk) => <li key={optionk}>{optionk}</li>);
  };

  return (
    <div>
      <a
        className="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <GiHamburgerMenu color="black" />
      </a>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>Some Random Text</div>

          <div className="list-group list-group-flush">
            {/* <ul>{!stageOptions ? "Loading" : displayStagesInList()}</ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
