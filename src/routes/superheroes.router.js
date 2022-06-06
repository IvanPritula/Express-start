
const express = require("express");
const { middleWare } = require("../middlewares/index.js");
const SuperHeroesController = require("../controllers/superheroes.cont.js");

const superHeroesRouter = express.Router();

superHeroesRouter.get('/:id/:nickname/get', middleWare, SuperHeroesController.getHero);

superHeroesRouter.post('/', SuperHeroesController.createHero);

module.exports = superHeroesRouter;
