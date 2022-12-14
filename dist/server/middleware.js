"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenMiddleware = void 0;
const tokenMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (token !== 'mysecrettoken') {
        res.status(403);
        res.send(new Error('Wrong AccessCredentials'));
    }
    else {
        next();
    }
};
exports.tokenMiddleware = tokenMiddleware;
