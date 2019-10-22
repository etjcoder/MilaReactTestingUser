const router = require("express").Router();
// const bookRoutes = require("./books");
const userRoutes = require("./user");
const adminRoutes = require("./admin");
const signupRoutes = require("./signin");
const authRoutes = require("./auth");

// Book routes
// router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("/admin", adminRoutes);
router.use("/auth", authRoutes);

module.exports = router;