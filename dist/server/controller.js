"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
const getTime = (req, res) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    try {
        if (token === 'mysecrettoken') {
            res.status(200);
            res.send('<h1>Hello World From the Typescript Server!</h1>');
        }
        else {
            throw new Error('Wrong AccessCredentials');
        }
    }
    catch (e) {
        res.status(403);
        res.send(e);
    }
};
exports.getTime = getTime;