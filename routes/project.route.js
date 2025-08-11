const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const { protect } = require('../middlewares/auth.middleware');

router.route('/project')
  .post(protect, projectController.createProject)
  .get(protect, projectController.getProjects);

router.route('/project/:id')
  .get(protect, projectController.getProject)
  .put(protect, projectController.updateProject)
  .delete(protect, projectController.deleteProject);

module.exports = router;