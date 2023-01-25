import { Request, Response } from "express";
import { moviesService } from "@/services";

export async function getMovies (req: Request, res: Response) {
  try {
    const movies = await moviesService.getAll();
    res.send(movies);
  } catch (err) {
    res.sendStatus(500);
  }
};

export async function getMoviesCountByGenre (req: Request, res: Response) {
  try {
    const movies = await moviesService.getCountByGenre();
    res.send(movies);
  } catch (err) {
    res.sendStatus(500);
  }
};

export async function postMovie (req: Request, res: Response) {
  try {
    await moviesService.postOneById(req.body);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
  }
};

export async function postNote (req: Request, res: Response) {
  const { id } = req.params;

  try {
    await moviesService.postOneNoteById(req.body, +id);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

export async function deleteMovie (req: Request, res: Response) {
  const { id } = req.params;

  try {
    await moviesService.deleteOneById(+id);
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};