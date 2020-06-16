const express = require("express");

const RepoController = require("./controllers/repositorieController.js");
repoController = new RepoController()

const verify = require('./middleware/verify.js')

const router = express.Router()

router.post("/repositories",repoController.create);

router.get("/repositories",repoController.list);

router.put("/repositories/:id",verify,repoController.update);

router.delete("/repositories/:id",verify,repoController.delete);

router.post("/repositories/:id/like",verify,repoController.like);

module.exports = router