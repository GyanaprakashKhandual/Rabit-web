const express = require('express');
const router = express.Router();
const testDataController = require('../controllers/test.controller');
const { protect } = require('../middlewares/auth.middleware');

router.route('/projects/:projectId/test-data')
  .post(protect, testDataController.createTestData)
  .get(protect, testDataController.getTestDataForProject);

router.route('/test-data/:id')
  .get(protect, testDataController.getTestData)
  .put(protect, testDataController.updateTestData)
  .delete(protect, testDataController.deleteTestData);

module.exports = router;