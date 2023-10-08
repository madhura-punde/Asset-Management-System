export const optionsForHorizontalBarGraph = {
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
      text: "Stage wise Representation of Data",
    },
  },
};

export const optionsForDoughnutGraph = {
  type: "doughnut",
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Tangible Vs InTangible Assets",
      fontSize: 20,
    },
  },
};
