const gamesRouter = require("express").Router();

const {
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  findGameById,
  createGame,
  checkIfUsersAreSafe,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIsVoteRequest
} = require("../middlewares/games.js");
const {
  sendAllGames,
  sendGameById,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted
} = require("../controllers/games.js");


gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  createGame,
  sendGameCreated,

);
gamesRouter.get("/games/:id", findGameById, sendGameById, sendAllGames);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated,
  checkIsVoteRequest

);
gamesRouter.delete(
  "/games/:id",
  deleteGame,
  sendGameDeleted,

);

module.exports = gamesRouter;