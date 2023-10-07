import { sampleData } from "./sample";

function stageDetails() {
  //const stageArray = sampleData.map((item) => item.Category);
  //   console.log([...new Set(stageArray)]);
  //   let stageData = new Map();
  let count = { hardware: 0, software: 0 };
  let counterForStage = {
    planning: 0,
    procurement: 0,
    distribution: 0,
    operation: 0,
    maintainence: 0,
    disposal: 0,
  };

  sampleData.forEach((item) => {
    switch (item["Assignment Group"]) {
      case "Business Planning":
        counterForStage.planning += 1;
        break;
      case "Procurement":
        counterForStage.procurement += 1;
        break;
      case "Distribution":
        counterForStage.distribution += 1;
        break;
      case "Operations":
        counterForStage.operation += 1;
        break;
      case "Maintainance":
        counterForStage.maintainence += 1;
        break;
      case "Disposal":
        counterForStage.disposal += 1;
        break;
      default:
        return;
    }

    switch (item.Category) {
      case "Hardware":
        count.hardware += 1;
        break;
      case "Software":
        count.software += 1;
        break;
    }
  });

  //   console.log(counterForStage, count);
  return { counterForStage, count };
}

export default stageDetails;
