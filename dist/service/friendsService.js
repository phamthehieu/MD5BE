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
const friends_1 = require("../model/friends");
class FriendsService {
    constructor() {
        this.sendFriends = (send) => __awaiter(this, void 0, void 0, function* () {
            yield this.friendsRepository.save(send);
            return 'Success';
        });
        this.confirmFriends = (idUser, id) => __awaiter(this, void 0, void 0, function* () {
            let sql = `UPDATE friends SET status = 'friend' where (idReceiver = ${idUser} and idSender = ${id}) or (idReceiver = ${id} and idSender = ${idUser})`;
            yield this.friendsRepository.query(sql);
            return 'Success';
        });
        this.listSendFriends = (id, status) => __awaiter(this, void 0, void 0, function* () {
            let sql = `SELECT * from friends f JOIN users u ON f.idSender = u.idUser where f.idReceiver = ${id} and f.status = '${status}'`;
            return yield this.friendsRepository.query(sql);
        });
        this.listReceiveFriends = (id, status) => __awaiter(this, void 0, void 0, function* () {
            let sql = `SELECT * from friends f JOIN users u ON f.idReceiver = u.idUser where f.idSender = ${id} and f.status = '${status}'`;
            return yield this.friendsRepository.query(sql);
        });
        this.listFriends = (id, status) => __awaiter(this, void 0, void 0, function* () {
            let sql = `select * from friends f JOIN users u ON f.idSender = u.idUser where f.idReceiver = ${id} and f.status = '${status}'
                   union
                   select * from friends f JOIN users u ON f.idReceiver = u.idUser where f.idSender = ${id} and f.status = '${status}'`;
            return yield this.friendsRepository.query(sql);
        });
        this.remove = (sender, receiver) => __awaiter(this, void 0, void 0, function* () {
            let sql = `delete from friends where (idReceiver = ${receiver} and idSender = ${sender}) or (idReceiver = ${sender} and idSender = ${receiver} )`;
            yield this.friendsRepository.query(sql);
            return 'Success';
        });
        this.friendsRepository = data_soure_1.AppDataSource.getRepository(friends_1.Friends);
    }
}
exports.default = new FriendsService();
//# sourceMappingURL=friendsService.js.map