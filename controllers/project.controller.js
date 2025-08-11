// controllers/project.controller.js
const Project = require('../models/project.model'); // adjust path if needed

/**
 * @desc    Create a new project
 * @route   POST /api/projects
 * @access  Private
 */
exports.createProject = async (req, res) => {
    try {
        const { projectName, projectDesc } = req.body;

        if (!projectName || !projectDesc) {
            return res.status(400).json({ message: "Project name and description are required" });
        }

        const project = await Project.create({
            user: req.user._id, // assuming user is attached to req by middleware
            projectName,
            projectDesc
        });

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: project
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

/**
 * @desc    Get all projects for a user
 * @route   GET /api/projects
 * @access  Private
 */
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

/**
 * @desc    Get a single project by ID
 * @route   GET /api/projects/:id
 * @access  Private
 */
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findOne({ _id: req.params.id, user: req.user._id });

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        res.status(200).json({ success: true, data: project });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

/**
 * @desc    Update a project
 * @route   PUT /api/projects/:id
 * @access  Private
 */
exports.updateProject = async (req, res) => {
    try {
        const { projectName, projectDesc } = req.body;

        const project = await Project.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            { projectName, projectDesc },
            { new: true, runValidators: true }
        );

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        res.status(200).json({
            success: true,
            message: "Project updated successfully",
            data: project
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

/**
 * @desc    Delete a project
 * @route   DELETE /api/projects/:id
 * @access  Private
 */
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.params.id, user: req.user._id });

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        res.status(200).json({
            success: true,
            message: "Project deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};
