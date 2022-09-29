import { WebServer } from './WebServer';
import express, { Express, Request, Response, Router } from 'express';
import { UserController } from '../Controller/user.controller';

export class ExpressServer implements WebServer {
  port: number;
  server: Express;

  constructor(port: number) {
    this.port = port;
    this.server = express();
    this.server.use(express.json());
  }

  route(): Router {
    const router: Router = express.Router();

    const userController: UserController = new UserController();
    router.get('/users', (_: Request, res: Response) => {
      const response = userController.fetch();
      return res.send(response);
    });
    router.get('/users/:id', (req: Request, res: Response) => {
      const response = userController.fetchById(req.params.id);
      return res.send(response);
    });

    return router;
  }

  start(): void {
    this.server.use('/api/v1', this.route());

    this.server.listen(this.port, () => {
      console.log(`Server running at https://localhost:${this.port}`);
    });
  }
}
