import express from 'express';
import setupRoutes from './routes';
import setupMiddlewares from './middleware';
import swaggerDocs from '../../presentation/docs';
import EnvConfig from './env';

const app = express();
setupMiddlewares(app);
setupRoutes(app);
swaggerDocs(app, Number(EnvConfig.SERVER_PORT));

export default app;