import { prisma } from "@/config";
import { Movie } from "@/protocols";

export async function selectAll() {
  const result =  await prisma.movies.findMany({
    include: {
      moviesGenres: {
        select: {
          genres: { select: { name: true } }
        }
      }
    }
  });

  const formatedObj = result.map(e => {
    const { id, name, platform } = e;
    return { id, name, platform, 
      genres: e.moviesGenres.map(f => f.genres.name)
    };
  });

  return formatedObj;
}

export async function selectCountByGenre() {
  const result = await prisma.genres.findMany({
    include: {
      _count: {
        select: { moviesGenres: true },
      },
    },
    orderBy: {
      moviesGenres: {
        _count: 'desc'
      }
    }
  })

  const formatedObj = result.map(e => {
    const { id, name } = e;
    return { id, name, 
      count: e._count.moviesGenres
    };
  });

  return formatedObj;
}

export async function insertOne(movie: Movie) {
  const { name, platform, genres } = movie;

  await prisma.movies.create({
    data: { 
      name,
      platform,
      moviesGenres: {
        create: genres.map(e => ({
          genres: {
            connectOrCreate: {
              where: { name: e },
              create: { name: e }
            }
          }
        }))
      }
    }
  });
}

export async function insertOneNote(note: string, user: string, id: number) {
  await prisma.usersMovies.create({
    data: { 
      note,
      users: {
        connectOrCreate: {
          where: { name: user },
          create: { name: user }
        }
      },
      movies: {
        connect: { id }
      }
    }
  });
}

export async function deleteOne(id: number) {
  await prisma.movies.update({
    where: { id },
    data: {
      moviesGenres: { deleteMany: {} },
      usersMovies: { deleteMany: {} },
    }
  });

  await prisma.movies.delete({
    where: { id }
  });
}
