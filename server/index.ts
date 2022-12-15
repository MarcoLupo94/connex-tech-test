import express, { Express } from 'express';
import cors from 'cors';
import router from './router';
import promMid from 'express-prometheus-middleware';
import { tokenMiddleware } from './middleware';

const corsOption = {
  origin: ['http://localhost:3000']
};

const app: Express = express();
app.use(express.json());
app.use(cors(corsOption));
app.use(tokenMiddleware);
app.use(promMid({ metricsPath: '/metrics', collectDefaultMetrics: true }));
app.use(router);

const port = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`))
}

export default app;
