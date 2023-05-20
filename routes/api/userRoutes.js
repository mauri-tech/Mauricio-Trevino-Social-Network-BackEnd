const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controller/userController");

// GET and POST routes for /api/users
router.route("/")
  .get(getAllUsers) // get all users
  .post(createUser); // create a new user

// GET, PUT, and DELETE routes for /api/users/:id
router.route("/:id")
  .get(getUserById) // get a single user by id
  .put(updateUser) // update a user by id
  .delete(deleteUser); // delete a user by id

// POST and DELETE routes for /api/users/:id/friends/:friendsId
router.route("/:id/friends/:friendsId")
  .post(addFriend) // add a friend to a user's friend list
  .delete(removeFriend); // remove a friend from a user's friend list

// Exporting router for use in other parts of the app
module.exports = router;
