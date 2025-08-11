const Project = require('../models/project.model');
const TestData = require('../models/test.model');
const asyncHandler = require('express-async-handler');

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  const { projectName, projectDesc } = req.body;

  if (!projectName || !projectDesc) {
    res.status(400);
    throw new Error('Please provide all fields');
  }

  const project = await Project.create({
    user: req.user._id,
    projectName,
    projectDesc
  });

  res.status(201).json(project);
});

// @desc    Get all projects for a user
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ user: req.user._id });
  res.status(200).json(projects);
});

// @desc    Get a single project with its test data
// @route   GET /api/projects/:id
// @access  Private
const getProject = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.id,
    user: req.user._id
  });

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  const testData = await TestData.find({
    project: req.params.id,
    user: req.user._id
  });

  res.status(200).json({
    project,
    testData
  });
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.id,
    user: req.user._id
  });

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  project.projectName = req.body.projectName || project.projectName;
  project.projectDesc = req.body.projectDesc || project.projectDesc;

  const updatedProject = await project.save();
  res.status(200).json(updatedProject);
});

// @desc    Delete a project and its test data
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.id,
    user: req.user._id
  });

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  // Delete all test data associated with the project
  await TestData.deleteMany({
    project: req.params.id,
    user: req.user._id
  });

  await project.remove();
  res.status(200).json({ message: 'Project and associated test data removed' });
});

module.exports = {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject
};