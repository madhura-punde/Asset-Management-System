import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
import { optionsForDoughnutGraph } from "../Data/GraphOptions";

function Visualization() {
  let [keysforGraph, setKeys] = useState();
  let [valuesForGraph, setValues] = useState([]);

  let [doughnutGData, setData] = useState();
  let [doughnutlabels, setDoughnutLabels] = useState();

  let [assetDataTaken, countObject] = useSelector((state) => [
    state.assetData,
    state.countObjForGraph,
  ]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_AssetData}categoryCountsAndEntries`
        );
        const res = response.data;

        // console.log(res);
        setDoughnutLabels(Object.keys(res));
        setData(Object.values(res).map((item) => item.count));
      } catch (e) {
        console.log(e);
      }
    };
    FetchData();
  }, []);

  useEffect(() => {
    console.log({ assetDataTaken, countObject });
    if (countObject) {
      //   console.log(Object.keys(countObject));
      //   console.log(Object.values(countObject));
      const keys = Object.keys(countObject);
      const values = Object.values(countObject).map((item) => item.count);

      console.log({ keys, values });
      console.log(values[1]);
      setKeys(keys);
      setValues(values);
    }
  }, [countObject]);

  let DoughnutData = {
    labels: doughnutlabels,
    datasets: [
      {
        label: "Tangible Vs InTangible Assets",
        data: doughnutGData,
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  const data = {
    labels: keysforGraph,
    datasets: [
      {
        axis: "y",
        label: "My First Dataset",
        data: valuesForGraph,
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      indexAxis: "y",
    },
  };

  return (
    <div className="chart">
      {countObject && <Bar options={config} data={config.data} />}

      {doughnutGData !== null && doughnutlabels !== null ? (
        <Doughnut data={DoughnutData} options={optionsForDoughnutGraph} />
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default Visualization;
