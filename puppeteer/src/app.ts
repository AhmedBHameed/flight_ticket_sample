import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import environment from 'src/config/environment';
import xss from 'src/middleware/cleanXss.middleware';

import logWelcome from 'src/util/logWelcome';
import generateTicketController from './controller/generateTicket.controller';
import generateTicketControllerTest from './controller/generateTicketTest.controller';

const {SERVER_ALLOWED_ORIGIN, SERVER_PORT} = environment;
(async () => {
  console.log(SERVER_PORT)
  // initLogger();

  const app = express();
  app.disable('x-powered-by');
  // app.use(
  //   cors({
  //     origin: (origin, callback) => {
  //       if (!origin || SERVER_ALLOWED_ORIGIN.includes(origin)) {
  //         callback(null, true);
  //         return;
  //       }
  //       const error = new Error(
  //         `Origin ${origin} has been blocked by CORS policy`
  //       );
  //       // logger.error(error);
  //       callback(error, origin);
  //     },
  //     credentials: true,
  //   })
  // );

  app.use(helmet({contentSecurityPolicy: false}));
  app.use(xss());
  app.set('view engine', 'handlebars');
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));


  app.get('/generate/ticket', generateTicketController);
  app.get('/generate/ticket/test', generateTicketControllerTest);

  // Checking server availability
  app.use('/', async (_, res) => {
    res.send({message: 'System is healthy'});
    res.end();
  });

  const httpServer = http.createServer(app);

  
  httpServer.listen(SERVER_PORT, logWelcome);
})();

export default {};
