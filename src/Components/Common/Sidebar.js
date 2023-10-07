import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { sampleData } from "../Data/sample";

function Sidebar() {
  function generateOptions() {
    
    return sampleData.map((item, index) => (
      <a
        href="#"
        className="list-group-item list-group-item-action"
        key={index}
      >
        {item["Assignment Group"]}
      </a>
    ));
  }

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
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>

          <div className="list-group list-group-flush">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              The current link item
            </a>
            {generateOptions()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
