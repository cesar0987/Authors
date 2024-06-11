const AuthorsController = require("../controllers/authors.controllers");

module.exports = (app) => {
  app.post("/api/authors/new", AuthorsController.createAuthor);
  app.get("/api/authors", AuthorsController.getAllAuthors);
  app.get("/api/authors/:id", AuthorsController.getAuthor);
  app.put("/api/authors/:id", AuthorsController.updateAuthor);
  app.delete("/api/authors/:id", AuthorsController.deleteAuthor);
};
