require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const AuthorsRoutes = require("./routes/authors.routes");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 8000;

require("./configuration/configuration.mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AuthorsRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/api/authors/new", (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) => res.json(err));
});
