import express from "express";
import {
  deleteAsset,
  addAsset,
  updateAssignmentGroup,
  readAllData,
  countAPI,
  categoryCountAndEnteries,
  getassetDetails,
} from "../Controller/assetController.js";

const router = express.Router();

//main Assset-Data
router.get("/asset-data", readAllData);
router.delete("/asset-data/:assetId", deleteAsset);
router.put("/asset-data/:assetId", updateAssignmentGroup);
router.post("/asset-data", addAsset);
router.get("/assignmentGroupCounts", countAPI);
router.get("/categoryCountsAndEntries", categoryCountAndEnteries);
router.get("/asset-data/:assetID", getassetDetails);
export default router;
