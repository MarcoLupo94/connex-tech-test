import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import router from './router';
import promMid from 'express-prometheus-middleware';
require('dotenv').config();

const corsOption = {
  origin: ['http://localhost:3000']
};

const app: Express = express();
// ADD MIDDLEWARE TO FILTER UNAUTH TOKENS AND RESPOND WITH 403
app.use(express.json());
app.use(cors(corsOption));
app.use(promMid({ metricsPath: '/metrics', collectDefaultMetrics: true }));
app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
