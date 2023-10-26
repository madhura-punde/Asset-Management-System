import * as assetType from "./assetType";
import { sampleData } from "../../Components/Data/sample";

let initialAssetState = {
  assetData: sampleData,
  //testing purpose only
  planningCOunt: 4,
  procurementCOunt: 100,
  maintainenceCOunt: 5,
  operationsCOunt: 2,
  distributionCOunt: 1,
  disposalCOunt: 6,
};

const reducer = (state = initialAssetState, action) => {
  switch (action.type) {
    case assetType.FromPROCUREMENT:
      return state.assetData.map((asset) =>
        asset["Asset ID"] === action.payload.asset_id
          ? { ...asset, "Assignment Group": "Distribution" }
          : asset
      );
    case assetType.FromPLANNING:
      return state.assetData.map((asset) =>
        asset["Asset ID"] === action.payload.asset_id
          ? { ...asset, "Assignment Group": "Procurement" }
          : asset
      );

    default:
      return state;
  }
};

export default reducer;
