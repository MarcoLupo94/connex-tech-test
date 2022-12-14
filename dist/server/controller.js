"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
const getTime = (req, res) => {
    try {
        res.status(200);
        res.send({
            properties: {
                epoch: {
                    description: Date.now(),
                    type: 'number'
                }
            },
            required: ['epoch'],
            type: 'object'
        });
    }
    catch (e) {
        res.status(400);
        res.send(e);
    }
};
exports.getTime = getTime;
