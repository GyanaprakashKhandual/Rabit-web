const TestData = require('../models/test.model');
const Project = require('../models/project.model');
const asyncHandler = require('express-async-handler');

const createTestData = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.projectId,
    user: req.user._id
  });

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  const {
    apiName,
    networkType,
    apiLink,
    k6Result
  } = req.body;

  if (!apiName || !networkType || !apiLink || !k6Result) {
    res.status(400);
    throw new Error('Please provide all required fields');
  }

  const testData = await TestData.create({
    user: req.user._id,
    project: req.params.projectId,
    apiName,
    networkType,
    apiLink,
    k6Result
  });

  res.status(201).json(testData);
});

// @desc    Get all test data for a project
// @route   GET /api/projects/:projectId/test-data
// @access  Private
const getTestDataForProject = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    _id: req.params.projectId,
    user: req.user._id
  });

  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }

  const testData = await TestData.find({
    project: req.params.projectId,
    user: req.user._id
  });

  res.status(200).json(testData);
});

// @desc    Get single test data entry
// @route   GET /api/test-data/:id
// @access  Private
const getTestData = asyncHandler(async (req, res) => {
  const testData = await TestData.findOne({
    _id: req.params.id,
    user: req.user._id
  });

  if (!testData) {
    res.status(404);
    throw new Error('Test data not found');
  }

  res.status(200).json(testData);
});

// @desc    Update test data
// @route   PUT /api/test-data/:id
// @access  Private
const updateTestData = asyncHandler(async (req, res) => {
  const testData = await TestData.findOne({
    _id: req.params.id,
    user: req.user._id
  });

  if (!testData) {
    res.status(404);
    throw new Error('Test data not found');
  }

  testData.apiName = req.body.apiName || testData.apiName;
  testData.networkType = req.body.networkType || testData.networkType;
  testData.apiLink = req.body.apiLink || testData.apiLink;
  testData.k6Result = req.body.k6Result || testData.k6Result;

  const updatedTestData = await testData.save();
  res.status(200).json(updatedTestData);
});

// @desc    Delete test data
// @route   DELETE /api/test-data/:id
// @access  Private
const deleteTestData = asyncHandler(async (req, res) => {
  const testData = await TestData.findOne({
    _id: req.params.id,
    user: req.user._id
  });

  if (!testData) {
    res.status(404);
    throw new Error('Test data not found');
  }

  await testData.remove();
  res.status(200).json({ message: 'Test data removed' });
});

module.exports = {
  createTestData,
  getTestDataForProject,
  getTestData,
  updateTestData,
  deleteTestData
};