const express = require("express");
const userRouter = require("./user.router.js");
const superHeroesRouter = require("./superheroes.router");

const router = express.Router();

router.use('/users', userRouter);
superHeroesRouter.use('/superheroes',superHeroesRouter);

module.exports = router;
module.exports = superHeroesRouter;
