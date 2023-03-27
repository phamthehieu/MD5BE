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
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const users_1 = require("../model/users");
class UserService {
    constructor() {
        this.editUser = (id, newUser) => __awaiter(this, void 0, void 0, function* () {
            let user = yield this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            return yield this.userRepository.update({ idUser: id }, newUser);
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            let user = yield this.userRepository.find();
            return user;
        });
        this.getUser = (id) => __awaiter(this, void 0, void 0, function* () {
            let user = yield this.userRepository.findOneBy({ idUser: id });
            return user;
        });
        this.getProfileUser = (idUser, id) => __awaiter(this, void 0, void 0, function* () {
            let sql = `select *
                   from users u
                            join friends f on (u.idUser = f.idSender) or (u.idUser = f.idReceiver)
                   where (f.idReceiver = ${idUser} and f.idSender = ${id})
                      or (f.idReceiver = ${id} and f.idSender = ${idUser})
                       and idUser = ${id}`;
            return yield this.userRepository.query(sql);
        });
        this.lock = (id) => __awaiter(this, void 0, void 0, function* () {
            let user = yield this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            else {
                if (user.status === 'open') {
                    return this.userRepository.update({ idUser: id }, { status: 'locked' });
                }
                else {
                    return this.userRepository.update({ idUser: id }, { status: 'open' });
                }
            }
        });
        this.changePassword = (user, newPass) => __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.update({ idUser: user.idUser }, { password: newPass });
        });
        this.findUser = (id) => __awaiter(this, void 0, void 0, function* () {
            let user = yield this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            else {
                return user;
            }
        });
        this.friendSuggestion = (id) => __awaiter(this, void 0, void 0, function* () {
            let sql = `select *
                   from users
                   where idUser not in (select idSender from friends where idReceiver = ${id} or idSender = ${id})
                     and idUser not in (select idReceiver from friends where idSender = ${id} or idReceiver = ${id})
                     and idUser != ${id}    
        `;
            return yield this.userRepository.query(sql);
        });
        this.userRepository = data_soure_1.AppDataSource.getRepository(users_1.Users);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map