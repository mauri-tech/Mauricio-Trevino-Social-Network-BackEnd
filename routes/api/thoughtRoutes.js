const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controller/thoughtController");

// GET and POST routes for /api/thoughts
router.route("/")
  .get(getAllThoughts) // get all thoughts
  .post(createThought); // create a new thought

// GET, PUT, and DELETE routes for /api/thoughts/:id
router.route("/:id")
  .get(getThoughtById) // get a single thought by id
  .put(updateThought) // update a thought by id
  .delete(deleteThought); // delete a thought by id

// POST route for /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions")
  .post(addReaction); // add a reaction to a thought by thoughtId

// DELETE route for /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction); // delete a reaction by reactionId from a thought by thoughtId

// Exporting router for use in other parts of the app
module.exports = router;
