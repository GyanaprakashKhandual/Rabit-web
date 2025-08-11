// routes/project.routes.js
const express = require('express');
const router = express.Router();
const {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
} = require('../controllers/project.controller'); // adjust path if needed

const { protect } = require('../middleware/auth.middleware'); 
// "protect" ensures the user is authenticated

// Routes
router.post('/', protect, createProject);      // Create project
router.get('/', protect, getProjects);         // Get all projects for logged-in user
router.get('/:id', protect, getProjectById);   // Get single project
router.put('/:id', protect, updateProject);    // Update project
router.delete('/:id', protect, deleteProject); // Delete project

module.exports = router;
