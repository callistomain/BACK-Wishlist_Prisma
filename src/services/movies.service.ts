import { MovieNote, Movie } from "@/protocols";
import { deleteOne, selectCountByGenre, selectAll, insertOne, insertOneNote } from "@/repositories";

async function getAll() {
  return await selectAll();
}

async function getCountByGenre() {
  return await selectCountByGenre();
}

async function postOneById(movie: Movie) {
  await insertOne(movie);
}

async function postOneNoteById(movieNote: MovieNote, id: number) {
  await insertOneNote(movieNote.note, movieNote.user, id);
}

async function deleteOneById(id: number) {
  await deleteOne(id);
}

export const moviesService = {
  getAll,
  getCountByGenre,
  postOneById,
  postOneNoteById,
  deleteOneById
};
