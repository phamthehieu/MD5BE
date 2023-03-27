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
const userService_1 = __importDefault(require("../service/userService"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    constructor() {
        this.editUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let editProfile = yield this.UserService.editUser(id, req.body);
                res.status(200).json({
                    Message: 'Update user success',
                    editProfile
                });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.lockUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let lock = yield this.UserService.lock(id);
                res.status(200).json({ lock });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.showListUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield this.UserService.getAll();
                res.status(200).json(users);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.showProfileUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield this.UserService.getProfileUser(req.query.idUser, req.query.id);
                res.status(200).json({ user });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.showProfile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let user = yield this.UserService.getUser(id);
                res.status(200).json({ user });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.changePassword = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let user = yield userService_1.default.findUser(id);
                let passwordCompare = yield bcrypt_1.default.compare(req.body.password, user.password);
                if (!passwordCompare) {
                    res.status(200).json('wrong password');
                }
                else {
                    let newPass = yield bcrypt_1.default.hash(req.body.newPassword, 10);
                    let response = yield userService_1.default.changePassword(user, newPass);
                    res.status(200).json(response);
                }
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.UserService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map