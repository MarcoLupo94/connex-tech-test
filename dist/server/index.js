"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const express_prometheus_middleware_1 = __importDefault(require("express-prometheus-middleware"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, express_prometheus_middleware_1.default)({ metricsPath: '/metrics', collectDefaultMetrics: true }));
app.use(router_1.default);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
