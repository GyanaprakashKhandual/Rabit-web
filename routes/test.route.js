const express = require('express');
const router = express.Router();
const testDataController = require('../controllers/test.controller');

router.route('/projects/:projectId/test-data')
  .post(testDataController.createTestData)
  .get(testDataController.getTestDataForProject);

router.route('/test-data/:id')
  .get(testDataController.getTestData)
  .put(testDataController.updateTestData)
  .delete(testDataController.deleteTestData);

module.exports = router;