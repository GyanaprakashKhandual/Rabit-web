const TestData = require("../models/test.model");

// Create Test Data
exports.createTestData = async (req, res) => {
  try {
    const newTestData = new TestData(req.body);
    await newTestData.save();

    res.status(201).json({
      message: "✅ Test data created successfully",
      data: newTestData
    });
  } catch (error) {
    res.status(500).json({
      message: "❌ Error creating test data",
      error: error.message
    });
  }
};

// Get all Test Data
exports.getAllTestData = async (req, res) => {
  try {
    const testDataList = await TestData.find().populate("user", "name email");
    res.status(200).json(testDataList);
  } catch (error) {
    res.status(500).json({
      message: "❌ Error fetching test data",
      error: error.message
    });
  }
};

// Get Test Data by ID
exports.getTestDataById = async (req, res) => {
  try {
    const testData = await TestData.findById(req.params.id).populate("user", "name email");
    if (!testData) {
      return res.status(404).json({ message: "⚠️ Test data not found" });
    }
    res.status(200).json(testData);
  } catch (error) {
    res.status(500).json({
      message: "❌ Error fetching test data",
      error: error.message
    });
  }
};

// Delete Test Data
exports.deleteTestData = async (req, res) => {
  try {
    const deleted = await TestData.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "⚠️ Test data not found" });
    }
    res.status(200).json({ message: "🗑️ Test data deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "❌ Error deleting test data",
      error: error.message
    });
  }
};
