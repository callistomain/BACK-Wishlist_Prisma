import joi from "joi";

export const postMovieSchema = joi.object({
  name: joi.string().required(),
  platform: joi.string().required(),
  genres: joi.array().items(joi.string()).required()
});

export const movieNoteSchema = joi.object({
  note: joi.string().required(),
  user: joi.string().required()
});
