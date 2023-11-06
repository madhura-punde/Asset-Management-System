import { SAVEDATA, SAVECOUNTOBJECT } from "./assetType";

export const SaveData = (data) => {
  return {
    type: SAVEDATA,
    payload: {
      asset_data: data,
    },
  };
};

export const SaveCountObject = (obj) => {
  return {
    type: SAVECOUNTOBJECT,
    payload: {
      countObj: obj,
    },
  };
};
