import * as assetType from "./assetType";

let initialAssetState = {
  assetData: [],
  countObjForGraph: {},
};

const reducer = (state = initialAssetState, action) => {
  switch (action.type) {
    case assetType.SAVEDATA:
      return {
        ...state,
        assetData: action.payload.asset_data,
      };
    case assetType.SAVECOUNTOBJECT:
      return { ...state, countObjForGraph: action.payload.countObj };

    default:
      return state;
  }
};

export default reducer;
