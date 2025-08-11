const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');


router.route('/')
  .post(projectController.createProject)
  .get(projectController.getProjects);

router.route('/:id')
  .get(projectController.getProject)
  .put(projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = router;