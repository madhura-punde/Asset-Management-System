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
    switch (item["assignmentGroup"]) {
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
  console.log(key, assetDatapassed);
  //1. Filter with Assignment Group
  let editedData = assetDatapassed.filter((asset) =>
    asset["assignmentGroup"].toLowerCase().includes(key.toLowerCase())
  );
  if (editedData.length !== 0) {
    console.log(editedData);
    return editedData;
  } else {
    //2. Filter with Department
    editedData = assetDatapassed.filter((asset) =>
      asset["department"].toLowerCase().includes(key.toLowerCase())
    );
    if (editedData.length !== 0) {
      console.log(editedData);
      return editedData;
    }
  }
  //3. Hardware or Software

  editedData = assetDatapassed.filter((asset) =>
    asset["category"].toLowerCase().includes(key.toLowerCase())
  );
  if (editedData.length !== 0) {
    console.log(editedData);
    return editedData;
  }
  //4. Filter data Location wise
  editedData = assetDatapassed.filter((asset) =>
    asset["physicalLocation"].toLowerCase().includes(key.toLowerCase())
  );
  if (editedData.length !== 0) {
    console.log(editedData);
    return editedData;
  }
};
