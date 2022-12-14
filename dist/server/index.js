"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const express_prometheus_middleware_1 = __importDefault(require("express-prometheus-middleware"));
require('dotenv').config();
const corsOption = {
    origin: [process.env.CLIENT_URL || 'http://localhost:3000']
};
const app = (0, express_1.default)();
// ADD MIDDLEWARE TO FILTER UNAUTH TOKENS AND RESPOND WITH 403
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOption));
app.use((0, express_prometheus_middleware_1.default)({ metricsPath: '/metrics', collectDefaultMetrics: true }));
app.use(router_1.default);
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
