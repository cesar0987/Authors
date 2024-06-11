const Author = require("../models/authors.models.js");

module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) => res.json(err));
};

module.exports.getAllAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => res.json(allAuthors))
    .catch((err) => res.json(err));
};

module.exports.getAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((author) => res.json(author))
    .catch((err) => res.json(err));
};

module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) => res.json(err));
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};
