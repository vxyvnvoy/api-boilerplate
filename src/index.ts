import { ExpressServer, WebServer } from './Server/index';

const server: WebServer = new ExpressServer(3000);
server.start();