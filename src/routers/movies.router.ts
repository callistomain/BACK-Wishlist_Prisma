import { Router } from "express";
import { deleteMovie, postMovie, getMovies, postNote, getMoviesCountByGenre } from "@/controllers";
import { validateBody } from "@/middlewares";
import { movieNoteSchema, postMovieSchema } from "@/schemas";

const moviesRouter = Router();

moviesRouter
  .get("/", getMovies)
  .get("/genres", getMoviesCountByGenre)
  .post("/", validateBody(postMovieSchema), postMovie)
  .post("/:id/note", validateBody(movieNoteSchema), postNote)
  .delete("/:id", deleteMovie);

export { moviesRouter };