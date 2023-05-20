const router = require("express").Router();
const apiRoutes = require("./api");

// Using api routes when "/api" path is accessed
router.use("/api", apiRoutes);

// Fallback for any other request (Not Found)
// If no API routes are hit, send the 404
router.use((req, res) => {
    res.status(404).send("404 Error: Page not found!");
});

// Exporting for use elsewhere in application
module.exports = router;
