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

export function stageDetailsTRY(passedData) {
  // console.log(passedData);

  let count = { hardware: 0, software: 0 };
  let counterForStage = {
    Planning: 0,
    Procurement: 0,
    Distribution: 0,
    Operations: 0,
    Maintainance: 0,
    Disposal: 0,
  };

  passedData.forEach((item) => {
    switch (item["Assignment Group"]) {
      case "Business Planning":
        counterForStage.Planning += 1;
        break;
      case "Procurement":
        counterForStage.Procurement += 1;
        break;
      case "Distribution":
        counterForStage.Distribution += 1;
        break;
      case "Operations":
        counterForStage.Operations += 1;
        break;
      case "Maintainance":
        counterForStage.Maintainance += 1;
        break;
      case "Disposal":
        counterForStage.Disposal += 1;
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

  // console.log(counterForStage, count);
  return { counterForStage, count };
}

export const getStagewiseData = (key, assetDatapassed) => {
  // const FilteredstageWise = assetDatapassed.filter(
  //   (asset) => asset["Assignment Group"].toLowerCase() === key.toLowerCase()
  // ); This is not working with space so using includes()

  //1. Filter with Assignment Group
  let editedData = assetDatapassed.filter((asset) =>
    asset["Assignment Group"].toLowerCase().includes(key.toLowerCase())
  );
  if (editedData.length !== 0) {
    console.log(editedData);
    return editedData;
  } else {
    //2. Filter with Department
    editedData = assetDatapassed.filter((asset) =>
      asset["Department"].toLowerCase().includes(key.toLowerCase())
    );
    if (editedData.length !== 0) {
      console.log(editedData);
      return editedData;
    }
  }
  //3. Hardware or Software

  editedData = assetDatapassed.filter((asset) =>
    asset["Category"].toLowerCase().includes(key.toLowerCase())
  );
  if (editedData.length !== 0) {
    console.log(editedData);
    return editedData;
  }
  //4. Filter data Location wise
  editedData = assetDatapassed.filter((asset) =>
    asset["Physical Location"].toLowerCase().includes(key.toLowerCase())
  );
  if (editedData.length !== 0) {
    console.log(editedData);
    return editedData;
  }
};

export const getDetailsOfAsset = (id, assetData) => {
  return assetData.filter((asset) => asset["Asset ID"] == id);
};

export default stageDetails;
