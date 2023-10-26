import {
  FromDISPOSAL,
  FromDISTRIBUTION,
  FromMAINTAINENCE,
  FromOPERATIONS,
  FromPROCUREMENT,
  FromPLANNING
} from "./assetType";

export const movedFromProcurement = (id) => {
  return {
    type: FromPROCUREMENT,
    payload: {
      asset_id: id,
    },
  };
};

export const movedFromPlanning = (id)=>{
  return{
    type: FromPLANNING,
    payload:{
      asset_id : id
    }
  }
}

export const movedFromDistribution = (id) => {
  return {
    type: FromDISTRIBUTION,
    payload: {
      asset_id: id,
    },
  };
};

export const moveToMaintainence = (id) => {
  return {
    type: FromMAINTAINENCE,
    payload: {
      asset_id: id,
    },
  };
};

export const moveToOperations = (id) => {
  return {
    type: FromOPERATIONS,
    payload: {
      asset_id: id,
    },
  };
};

export const moveToDisposal = (id) => {
  return {
    type: FromDISPOSAL,
    payload: {
      asset_id: id,
    },
  };
};
