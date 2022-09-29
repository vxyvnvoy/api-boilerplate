import { ExpressServer } from './Server/ExpressServer';
import { WebServer } from './Server/WebServer';

const server: WebServer = new ExpressServer(3000);
server.start();