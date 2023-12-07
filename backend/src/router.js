const express = require("express");

// const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations

// Route to get a list of items

const offreControllers = require("./controllers/offreControllers");
const categoriesManager = require("./controllers/categorieControllers");

router.get("/offres/:id", offreControllers.read);
router.get("/offres/", offreControllers.browse);
router.post("/offres/", offreControllers.add);
router.get("/categories/", categoriesManager.browse);
router.delete("/offres/:id", offreControllers.destroy);
router.put("/offres/:id", offreControllers.edit);
/* ************************************************************************* */

module.exports = router;
