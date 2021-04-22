const express = require("express");
const {
  allMoviesHandler,
  newMovieHandler,
  oneMovieHandler,
  deleteMovieHandler,
  patchHandler,
  putHandler,
  directorMoveiHandler,
  directorAndYearMoveiHandler,
} = require("../handlers/MovieHandlers.js");

const movieRouter = express.Router();

// app.route('/api/v1/movie')
movieRouter.route("/").get(allMoviesHandler).post(newMovieHandler);

movieRouter
  .route("/id/:id")
  .get(oneMovieHandler)
  .delete(deleteMovieHandler)
  .put(putHandler)
  .patch(patchHandler);

movieRouter
  .route("/director/:director/year/:year")
  .get(directorAndYearMoveiHandler);

movieRouter.route("/director/:director").get(directorMoveiHandler);

module.exports = movieRouter;

// შექმენით /api/v1/movies/:director/:year - იპოვეთ გადმოწოდებული რეჟისორის ყველა ფილმი რომელიც თან გადმოწოდებულ წელსაა გამოსული.
