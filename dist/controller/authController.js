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
const authService_1 = __importDefault(require("../service/authService"));
class AuthController {
    constructor() {
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield this.AuthService.checkUser(req.body);
                res.status(200).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userRegister = req.body;
                userRegister.role = 'user';
                userRegister.status = 'open';
                let user = yield this.AuthService.register(userRegister);
                res.status(200).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.AuthService = authService_1.default;
    }
}
exports.default = new AuthController();
//# sourceMappingURL=authController.js.map