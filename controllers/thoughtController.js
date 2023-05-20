const { Thought, User } = require("../models");

const thoughtController = {
    // Get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // Get one thought by it's id
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.id })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "No thought with this ID" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => res.status(400).json(err));
    },

    // Create thought for a user
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => {
                return User.findOneAndUpdate(
                    { _id:req.body.userID },
                    { $push:{ thoughts:dbThoughtData._id } },
                    { new: true }
                );
            })
            .then(userData => res.json(userData))
            .catch((err) => res.status(500).json(err));
    },

    // Update thought by it's id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) => {
                if (!thought) res.status(404).json({message: 'No thought found with this ID'});
                else res.json(thought);
            })
            .catch((err) => res.status(500).json(err));
    },

    // Delete a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then((thought) => {
                if (!thought) res.status(404).json({ message: 'No thought with this ID' });
                else {
                    return User.findOneAndUpdate(
                        { _id: req.body.userId },
                        { $pull: { thoughts: thought._id } },
                        { new: true }
                    );
                }
            })
            .then(() => res.json({ message: 'Thought and associated data deleted.' }))
            .catch((err) => res.status(500).json(err));
    },

    // Add Reaction
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) => {
                if (!thought) res.status(404).json({ message: 'No thought found with this ID' });
                else res.json(thought);
            })
            .catch((err) => res.status(500).json(err));
    },

    // Delete Reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: req.params.reactionID } },
            { runValidators: true, new: true }
        )
            .then((thought) => {
                if (!thought) res.status(404).json({ message: 'No thought found with this ID' });
                else res.json(thought);
            })
            .catch((err) => res.status(500).json(err));
    },
};

module.exports = thoughtController;
