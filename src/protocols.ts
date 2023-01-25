export type MovieEntity = {
  id: number,
  name: string,
  platform: string
};

export type Movie = MovieEntity & { genres:string[] };
export type MovieNote = { note: string, user: string };
