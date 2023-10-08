import { totalAssets, stageData } from "./stages";
import { sampleData } from "./sample";

export const dataForTotalAssets = {
  datasets: [
    {
      label: ["Tangible"],
      data: totalAssets,
      backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(255, 205, 86, 1)"],
    },
  ],
};

export const OptionForTotalAssets = {
  type: "bar",
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Representation of Total Assets in an Inventory",
      fontSize: 20,
    },
  },
  scales: {
    y: {
      id: "y",
      tick: {
        type: "bar",
        min: 1,
        max: 30,
        stepsize: 10,
      },
    },
    x: {
      id: "x",
    },
  },
};

// Doughnut Graph Data

export const dataForD = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

//Horizontal Bar Chart

export const optionsForHBar = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = stageData.map((item) => item.stage_name);
const labels_sample = sampleData.map((item) => item.stage_name);
export const dataForHBar = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: stageData.map((item) => item.totalNumberOfAssets),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};
