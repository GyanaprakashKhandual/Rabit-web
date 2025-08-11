const express = require("express");
const router = express.Router();
const testDataController = require("../controllers/test.controller");

// Routes
router.post("/", testDataController.createTestData);
router.get("/", testDataController.getAllTestData);
router.get("/:id", testDataController.getTestDataById);
router.delete("/:id", testDataController.deleteTestData);

module.exports = router;
