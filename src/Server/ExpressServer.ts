import { WebServer } from './WebServer';
import express, { Express, Request, Response } from 'express';

export class ExpressServer implements WebServer {
  port: number;

  constructor(port: number) {
    this.port = port;
  }

  start(): void {
    const server: Express = express();

    server.get('/', (req: Request, res: Response) => {
      res.send('Express + Typescript Server');  
    });

    server.listen(this.port, () => {
      console.log(`Server running at https://localhost:${this.port}`);
    });
  }
}
