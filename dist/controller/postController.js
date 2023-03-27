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
const postService_1 = __importDefault(require("../service/postService"));
class PostController {
    constructor() {
        this.getPostUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let posts = yield postService_1.default.getPostsUser(req.params.id);
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.findByIdPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let posts = yield postService_1.default.findByIdPost(req.params.id);
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let posts = yield postService_1.default.getAll();
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let post = req.body;
                yield this.postService.save(post);
                res.status(200).json('Success');
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let newPost = req.body;
            yield this.postService.update(id, newPost);
            res.status(200).json('Success!');
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            yield this.postService.remove(id);
            res.status(200).json('Success!');
        });
        this.postService = postService_1.default;
    }
}
exports.default = new PostController();
//# sourceMappingURL=postController.js.map