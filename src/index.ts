import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: Number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript Server');  
});

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});