import express, { json } from 'express';
import cors from 'cors';
import { moviesRouter } from '@/routers';

const app = express();
app
  .use(cors())
  .use(json())
  .get("/health", (req, res) => res.send("OK!"))
  .use("/movies", moviesRouter);

const port = +process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at port ${port}...`);
});