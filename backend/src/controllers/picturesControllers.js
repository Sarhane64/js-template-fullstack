// Import access to database tables
const tables = require("../tables");

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the offre data from the request body
  const img = req.body;

  try {
    // Insert the offre into the database
    const pictures = await tables.picture.create(img);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted offre
    res.status(201).json({ pictures });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  add,
};
