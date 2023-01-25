import { prisma } from "../src/config/database";

async function main() {
 await prisma.movies.create({
  data: {
    name: "Game of Thrones",
    platform: "HBO",
    moviesGenres: {
      create: [
        { genres: { connectOrCreate: { where: { name: "Fantasy" }, create: { name: "Fantasy" } } } },
        { genres: { connectOrCreate: { where: { name: "Adventure" }, create: { name: "Adventure" } } } },
        { genres: { connectOrCreate: { where: { name: "Drama" }, create: { name: "Drama" } } } },
      ]
    }
  }
 });

 await prisma.movies.create({
  data: {
    name: "House of the Dragon",
    platform: "HBO",
    moviesGenres: {
      create: [
        { genres: { connectOrCreate: { where: { name: "Fantasy" }, create: { name: "Fantasy" } } } },
        { genres: { connectOrCreate: { where: { name: "Adventure" }, create: { name: "Adventure" } } } },
        { genres: { connectOrCreate: { where: { name: "Drama" }, create: { name: "Drama" } } } },
      ]
    }
  }
 });

 await prisma.movies.create({
  data: {
    name: "Bojack Horseman",
    platform: "Netflix",
    moviesGenres: {
      create: [
        { genres: { connectOrCreate: { where: { name: "Animation" }, create: { name: "Animation" } } } },
        { genres: { connectOrCreate: { where: { name: "Comedy" }, create: { name: "Comedy" } } } },
        { genres: { connectOrCreate: { where: { name: "Drama" }, create: { name: "Drama" } } } },
      ]
    }
  }
 });

 await prisma.usersMovies.create({
    data: { 
      note: "Até a 5ª é bom.",
      users: {
        create: { name: "José" }
      },
      movies: {
        connect: { name: "Game of Thrones" }
      }
    }
  });
}

main()
  .then(() => console.log("Registro feito com sucesso!"))
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());