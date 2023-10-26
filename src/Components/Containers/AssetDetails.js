import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getDetailsOfAsset } from "../Data/functionality";
import assetImage from "../../Assets/assetImage.jpg";

// Icons Import
import { FaLaptopCode } from "react-icons/fa";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FcDepartment } from "react-icons/fc";
import { GrCompliance } from "react-icons/gr";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { BiSolidTagAlt } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaWatchmanMonitoring } from "react-icons/fa6";
import { AiTwotoneInsurance } from "react-icons/ai";
import { GiDuration } from "react-icons/gi";

import { BsArrowReturnRight } from "react-icons/bs";
import { movedFromProcurement, movedFromPlanning } from "../../redux";

function AssetDetails() {
  let { assetid, stagename } = useParams();

  let [assetDetails, setassetDetails] = useState();
  let dispatch = useDispatch();

  let assetDataTaken = useSelector((state) => state.assetData);

  useEffect(() => {
    const rcvedData = getDetailsOfAsset(assetid, assetDataTaken);
    setassetDetails(rcvedData[0]);
  }, []);

  useEffect(() => {
    console.log(assetDetails);
  }, [assetDetails]);

  const displayDetailsWithTabs = () => {
    return (
      <Tabs>
        <TabList>
          <Tab>General</Tab>
          <Tab>Technical</Tab>
        </TabList>

        <TabPanel>
          <h5>
            <BiSolidTagAlt />
            Asset Tag: {assetDetails["Asset Tag"]}
          </h5>
          <h5>
            <IoHardwareChipOutline />
            Category: {assetDetails["Category"]}
          </h5>
          <h5>
            <FaLayerGroup />
            Assignment Group: {assetDetails["Assignment Group"]}
          </h5>
          <h5>
            <GrCompliance />
            Compliance Status: {assetDetails["Compliance Status"]}
          </h5>
          <h5>
            <FaWatchmanMonitoring />
            Monitoring Status:{assetDetails["Monitoring Status"]}
          </h5>
          <h5>
            <BsFillCalendarDateFill />
            Date of purchase: {assetDetails["Date of Purchase"]}
          </h5>
          <h5>
            <FcDepartment style={{ colour: "black" }} />
            Department: {assetDetails["Department"]}
          </h5>
          <h5>
            <FaLocationDot />
            Physical Location: {assetDetails["Physical Location"]}
          </h5>
          <h5>
            <GiDuration />
            Warranty Duration: {assetDetails["Warranty Start Date"]} -
            {assetDetails["Warranty End Date"]}
          </h5>
          <h5>
            <AiTwotoneInsurance />
            Insurance Details: {assetDetails["Insurance Start Date"]} -
            {assetDetails["Insurance End Date"]}
          </h5>
        </TabPanel>
        <TabPanel>
          <h5>
            <BsArrowReturnRight />
            CPU : {assetDetails["CPU"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            MAC Address: {assetDetails["MAC Address"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            Manufacturer: {assetDetails["Manufacturer"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            Serial Number:{assetDetails["Serial Number"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            Model: {assetDetails["Model"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            RAM: {assetDetails["RAM"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            ROM: {assetDetails["ROM"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            OS Details: {assetDetails["OS Name"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            License Details: {assetDetails["Warranty End Date"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            Policy Number : {assetDetails["Policy Number"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            Part Number: {assetDetails["Part Number"]}
          </h5>
        </TabPanel>
      </Tabs>
    );
  };

  return (
    <div className="container">
      <br />
      <img src={assetImage} width={"650px"} height={"350px"} />
      <br />
      <br />
      <span>
        <h5>
          <FaLaptopCode />
          Asset ID: {assetid}
          {/* {stagename} */}
        </h5>
        {stagename !== "Disposal" ? (
          <button
            className="btn btn-lg btn-dark"
            onClick={() => {
              console.log({ stagename, assetid });

              console.log("dispatched actions");
              switch (stagename) {
                case "Procurement":
                  dispatch(movedFromProcurement(assetid));
                  break;
                case "Planning":
                  dispatch(movedFromPlanning(assetid));
                  break;
                default:
              }
            }}
          >
            Move to Next Stage
          </button>
        ) : null}
      </span>
      <br />
      <div>{!assetDetails ? "Loading" : displayDetailsWithTabs()}</div>
    </div>
  );
}

export default AssetDetails;
