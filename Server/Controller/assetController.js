import AssetData from "../Models/AssetData.js";

export const readAllData = async (request, response) => {
  try {
    const assets = await AssetData.find();

    response
      .status(200)
      .json({ message: "Asset Data fetched successfully", Data: assets });
  } catch (e) {
    response.status(500).json({ message: "Error in database", Error: e });
  }
};

export const deleteAsset = async (req, res) => {
  const assetId = req.params.assetId;
  console.log(req.params);

  try {
    // Find and delete the entry based on Asset ID
    const deletedAsset = await AssetData.findOneAndDelete({
      assetID: assetId,
    });
    console.log(deletedAsset);
    if (!deletedAsset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    return res.json({ message: "Asset deleted successfully", deletedAsset });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addAsset = async (req, res) => {
  const newData = req.body; // Assuming you send the new data in the request body
  console.log(newData);
  try {
    // Create a new instance of the AssetData model
    const newAsset = new AssetData(newData);

    // Save the new asset to the database
    const savedAsset = await newAsset.save();

    return res
      .status(201)
      .json({ message: "Asset added successfully", savedAsset });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateAssignmentGroup = async (req, res) => {
  const { assignmentGroup } = req.body;
  const assetID = req.params.assetId;

  try {
    console.log(assignmentGroup, req.params);
    // Find the asset by assetID
    const asset = await AssetData.findOne({ assetID });
    // console.log(asset["assignmentGroup"]);
    if (!asset) {
      return res.status(404).json({ message: "Asset not found" });
    }

    if (asset.assignmentGroup !== assignmentGroup) {
      // Update the assignmentGroup field
      asset.assignmentGroup = assignmentGroup;
      // Save the updated asset
      await asset.save();

      res.status(201).json({
        message: "Assignment Group updated successfully.",
        Data: asset,
      });
    } else {
      res.status(201).json({
        message:
          "Failed to update Assignment Group. Looks like assignment group is same.",
        Data: asset,
      });
    }
  } catch (e) {
    res.status(500).json({ message: "Some issue with Database", Error: e });
  }
};

export const countAPI = async (req, res) => {
  try {
    const assignmentGroups = [
      "Procurement",
      "Business Planning",
      "Disposal",
      "Distribution",
      "Operations",
      "Maintenance",
    ];
    const counts = {};

    // for (const group of assignmentGroups) {
    //   const count = await AssetData.countDocuments({ assignmentGroup: group });
    //   counts[group] = count;
    // }

    for (const group of assignmentGroups) {
      const entries = await AssetData.find({ assignmentGroup: group });
      const count = entries.length;
      counts[group] = {
        entries,
        count,
      };
    }

    res.json(counts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const categoryCountAndEnteries = async (req, res) => {
  try {
    // Query the database for distinct categories
    const distinctCategories = await AssetData.distinct("category");
    const categoryData = {};

    for (const category of distinctCategories) {
      const entries = await AssetData.find({ category });
      const count = entries.length;
      categoryData[category] = {
        entries,
        count,
      };
    }

    res.json(categoryData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getassetDetails = async (req, res) => {
  try {
    const assetID = parseInt(req.params.assetID);
    const asset = await AssetData.findOne({ assetID: assetID });

    if (asset) {
      res.json(asset);
    } else {
      res.status(404).json({ error: "Asset not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
