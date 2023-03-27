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
const data_soure_1 = require("../data-soure");
const users_1 = require("../model/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class AuthService {
    constructor() {
        this.register = (user) => __awaiter(this, void 0, void 0, function* () {
            user.password = yield bcrypt_1.default.hash(user.password, 10);
            return this.userRepository.save(user);
        });
        this.checkUser = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userCheck = yield this.userRepository.findOneBy({ userName: user.userName });
                if (!userCheck) {
                    return "User not found";
                }
                else {
                    if (userCheck.status === 'locked') {
                        return "User is already locked";
                    }
                    else {
                        let passwordCompare = yield bcrypt_1.default.compare(user.password, userCheck.password);
                        if (!passwordCompare) {
                            return 'Password does not match';
                        }
                        else {
                            let payload = {
                                idUser: userCheck.idUser,
                                userName: userCheck.userName,
                                role: userCheck.role,
                                status: userCheck.status
                            };
                            const token = jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                                expiresIn: 3600000
                            });
                            const check = {
                                token: token,
                                idUser: userCheck.idUser,
                                userName: userCheck.username,
                                role: userCheck.role,
                                status: userCheck.status
                            };
                            return check;
                        }
                    }
                }
            }
            catch (e) {
                console.log(e.message);
            }
        });
        this.userRepository = data_soure_1.AppDataSource.getRepository(users_1.Users);
    }
}
exports.default = new AuthService();
//# sourceMappingURL=authService.js.map