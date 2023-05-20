const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// routes for user related requests
router.use("/users", userRoutes);

// routes for thought related requests
router.use("/thoughts", thoughtRoutes);

// Exporting all routes
module.exports = router;