// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all offres from the database
    const offres = await tables.offre.readAll();

    // Respond with the offres in JSON format
    res.json(offres);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific offre from the database based on the provided ID
    const offre = await tables.offre.read(req.params.id);

    // If the offre is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the offre in JSON format
    if (offre == null) {
      res.sendStatus(404);
    } else {
      res.json(offre);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

const edit = async (req, res, next) => {
  try {
    await tables.offre.update(req.params.id, req.body);
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the offre data from the request body
  const offre = req.body;

  try {
    // Insert the offre into the database
    const insertId = await tables.offre.create(offre);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted offre
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  try {
    // Fetch a specific offre from the database based on the provided ID
    const offre = await tables.offre.delete(req.params.id);

    // If the offre is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the offre in JSON format
    if (offre == null) {
      res.sendStatus(404);
    } else {
      res.json(offre);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
