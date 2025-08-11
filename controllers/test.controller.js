const K6Result = require("../models/test.model");

// Create a new K6 result
exports.createK6Result = async (req, res) => {
    try {
        // Optional: attach user id if you want user-specific results
        const k6Result = new K6Result({
            ...req.body,
            // user: req.user.id, // Uncomment if linking to user
        });

        const savedResult = await k6Result.save();
        res.status(201).json({ success: true, data: savedResult });
    } catch (error) {
        console.error("Error creating K6 result:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Get all K6 results (User-specific if needed)
exports.getAllK6Results = async (req, res) => {
    try {
        const results = await K6Result.find(
            // { user: req.user.id } // Uncomment for per-user results
        ).sort({ createdAt: -1 });

        res.status(200).json({ success: true, data: results });
    } catch (error) {
        console.error("Error fetching K6 results:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Get a single K6 result by ID
exports.getK6ResultById = async (req, res) => {
    try {
        const result = await K6Result.findById(req.params.id);

        if (!result) {
            return res.status(404).json({ success: false, message: "Result not found" });
        }

        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error("Error fetching K6 result:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Update a K6 result
exports.updateK6Result = async (req, res) => {
    try {
        const updatedResult = await K6Result.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedResult) {
            return res.status(404).json({ success: false, message: "Result not found" });
        }

        res.status(200).json({ success: true, data: updatedResult });
    } catch (error) {
        console.error("Error updating K6 result:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Delete a K6 result
exports.deleteK6Result = async (req, res) => {
    try {
        const deletedResult = await K6Result.findByIdAndDelete(req.params.id);

        if (!deletedResult) {
            return res.status(404).json({ success: false, message: "Result not found" });
        }

        res.status(200).json({ success: true, message: "Result deleted successfully" });
    } catch (error) {
        console.error("Error deleting K6 result:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
