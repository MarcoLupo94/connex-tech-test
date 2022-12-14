import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import router from './router';
import promMid from 'express-prometheus-middleware';
dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(promMid({ metricsPath: '/metrics', collectDefaultMetrics: true }));
app.use(router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
