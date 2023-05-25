const { Thought, User } = require("../models");


const userController = {
    // Get all users
    getAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },


    // Create user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },


    // Get user by id
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
            .then((user) => {
                if (!user) res.status(404).json({ message: 'No user with this ID' });
                else res.json(user);
            })
            .catch((err) => res.status(500).json(err));
    },


    // Update user by id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) => {
                if (!user) res.status(404).json({ message: 'No user found with this ID' });
                else res.json(user);
            })
            .catch((err) => res.status(500).json(err));
    },


    // Delete user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) => {
                if (!user) res.status(404).json({ message: 'No user with this ID' });
                else {
                    return Thought.deleteMany({ _id: { $in: user.thoughts } });
                }
            })
            .then(() => res.json({ message: 'User and associated thoughts deleted.' }))
            .catch((err) => res.status(500).json(err));
    },


    // Add Friend
    addFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.id },
          { $addToSet: { friends: req.params.friendsId } },
          { runValidators: true, new: true }
        )
            .then((user) => {
                if (!user) res.status(404).json({ message: 'No user found with this ID' });
                else res.json(user);
            })
            .catch((err) => res.status(500).json(err));
      },


    // Remove Friend
    removeFriend(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { friends: req.params.friendsId } },
        { runValidators: true, new: true }
      )
          .then((user) => {
              if (!user) res.status(404).json({ message: 'No user found with this ID' });
              else res.json(user);
          })
          .catch((err) => res.status(500).json(err));
    },
};


module.exports = userController;


