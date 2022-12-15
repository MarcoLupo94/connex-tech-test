"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
describe('Routes Handler', () => {
    test("Should respond with 403 if token isn't authorized", () => {
        return (0, supertest_1.default)(index_1.default)
            .get('/')
            .set('Authorization', 'Bearer thisIsNotArealToken')
            .expect(403);
    });
    test('Should respond with 200 if token is authorized', () => {
        return (0, supertest_1.default)(index_1.default)
            .get('/time')
            .set('Authorization', 'Bearer mysecrettoken')
            .expect(200);
    });
    test('/time route should return the right data', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default)
            .get('/time')
            .set('Authorization', 'Bearer mysecrettoken')
            .expect(200);
        expect(response.body.properties).not.toBe(null);
    }));
});
