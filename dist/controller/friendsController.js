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
const friendsService_1 = __importDefault(require("../service/friendsService"));
const userService_1 = __importDefault(require("../service/userService"));
class AuthController {
    constructor() {
        this.sendFriends = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let sendFriend = req.body;
                sendFriend.status = 'confirm';
                let user = yield this.FriendsService.sendFriends(sendFriend);
                res.status(200).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.confirmFriends = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield this.FriendsService.confirmFriends(req.body.idSender, req.body.idReceiver);
                res.status(200).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.listSendFriends = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let status = 'confirm';
                let list = yield this.FriendsService.listSendFriends(id, status);
                res.status(200).json(list);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.listReceiveFriends = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let status = 'confirm';
                let list = yield this.FriendsService.listReceiveFriends(id, status);
                res.status(200).json(list);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.listFriends = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let status = 'friend';
                let list = yield this.FriendsService.listFriends(id, status);
                res.status(200).json(list);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let friend = yield this.FriendsService.remove(req.query.idSender, req.query.idReceiver);
                res.status(200).json(friend);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.friendSuggestion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let users = yield this.UserService.friendSuggestion(id);
                res.status(200).json(users);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.FriendsService = friendsService_1.default;
        this.UserService = userService_1.default;
    }
}
exports.default = new AuthController();
//# sourceMappingURL=friendsController.js.map