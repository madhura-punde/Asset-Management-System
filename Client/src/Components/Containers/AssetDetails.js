import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import assetImage from "../../Assets/assetImage.jpg";
import CustomSpinner from "../Common/CustomSpinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import axios from "axios";

function AssetDetails() {
  let { assetid, stagename } = useParams();
  let navigate = useNavigate();

  let [assetDetails, setassetDetails] = useState();

  // console.log({ assetid, stagename });
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_AssetData}asset-data/${assetid}`
        );
        const res = response.data;
        console.log(res);
        setassetDetails(res);
      } catch (e) {
        console.log(e);
      }
    };
    FetchData();
  }, []);

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
            Asset Tag: {assetDetails["assetTag"]}
          </h5>
          <h5>
            <IoHardwareChipOutline />
            Category: {assetDetails["category"]}
          </h5>
          <h5>
            <FaLayerGroup />
            Assignment Group: {assetDetails["assignmentGroup"]}
          </h5>
          <h5>
            <GrCompliance />
            Compliance Status: {assetDetails["complianceStatus"]}
          </h5>
          <h5>
            <FaWatchmanMonitoring />
            Monitoring Status:{assetDetails["monitoringStatus"]}
          </h5>
          <h5>
            <BsFillCalendarDateFill />
            Date of purchase: {assetDetails["date of Purchase"]}
          </h5>
          <h5>
            <FcDepartment style={{ colour: "black" }} />
            Department: {assetDetails["department"]}
          </h5>
          <h5>
            <FaLocationDot />
            Physical Location: {assetDetails["physicalLocation"]}
          </h5>
          <h5>
            <GiDuration />
            Warranty Duration: {assetDetails["warrantyStartDate"]} -
            {assetDetails["warrantyEndDate"]}
          </h5>
          <h5>
            <AiTwotoneInsurance />
            Insurance Details: {assetDetails["insuranceStartDate"]} -
            {assetDetails["insuranceEndDate"]}
          </h5>
        </TabPanel>
        <TabPanel>
          <h5>
            <BsArrowReturnRight />
            CPU : {assetDetails["cpu"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            MAC Address: {assetDetails["macAddress"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            Manufacturer: {assetDetails["manufacturer"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            Serial Number:{assetDetails["serialNumber"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            Model: {assetDetails["model"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            RAM: {assetDetails["ram"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            ROM: {assetDetails["rom"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            OS Details: {assetDetails["osName"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            License Details: {assetDetails["warrantyEndDate"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            Policy Number : {assetDetails["policyNumber"]}
          </h5>
          <h5>
            <BsArrowReturnRight />
            Part Number: {assetDetails["partNumber"]}
          </h5>
        </TabPanel>
      </Tabs>
    );
  };

  const calculateNextStage = (currentStage) => {
    switch (currentStage) {
      case "Business Planning":
        return "Procurement";
      case "Procurement":
        return "Distribution";
      case "Distribution":
        return "Operations";
      case "Operations":
        return "Maintenance";
      case "Maintenance":
        return "Disposal";
      default:
        return "Business Planning";
    }
  };

  const moveToNextStage = async () => {
    // console.log(assetDetails && assetDetails);
    const NextStage = calculateNextStage(
      assetDetails && assetDetails.assignmentGroup
    );

    const response = await axios.put(
      `${process.env.REACT_APP_AssetData}asset-data/${assetid}`,
      {
        assignmentGroup: NextStage,
      }
    );

    console.log(response.data.message);
    toast.success(response.data.message);
    // response.data && navigate("/");
    setTimeout(() => {
      response.data && navigate("/");
    }, 2000);
  };

  return (
    <div className="container">
      <br />
      <img src={assetImage} width={"650px"} height={"350px"} alt="" />
      <br />
      <br />

      <div>
        <FaLaptopCode />
        <b>Asset ID: {assetid}</b>
        {/* {stagename} */}
        {stagename !== "Disposal" ? (
          <>
            <button
              className="btn btn-md btn-dark float-right nextStage-btn"
              onClick={moveToNextStage}
            >
              Move to Next Stage
            </button>
          </>
        ) : null}
      </div>

      <br />
      <div>{!assetDetails ? CustomSpinner() : displayDetailsWithTabs()}</div>
    </div>
  );
}

export default AssetDetails;
