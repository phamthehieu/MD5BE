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
const posts_1 = require("../model/posts");
class PostService {
    constructor() {
        this.getPostsUser = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.postRepository.find({ idUser: id });
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            let sql = 'select * from users u join posts p on u.idUser = p.idUser';
            let posts = yield this.postRepository.query(sql);
            return posts;
        });
        this.save = (post) => __awaiter(this, void 0, void 0, function* () {
            yield this.postRepository.save(post);
            return 'success';
        });
        this.findByIdPost = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.postRepository.findOneBy({ idPost: id });
        });
        this.update = (id, newPost) => __awaiter(this, void 0, void 0, function* () {
            let post = yield this.postRepository.findOneBy({ idPost: id });
            if (!post) {
                return null;
            }
            return this.postRepository.update({ idPost: id }, newPost);
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            let post = yield this.postRepository.findOneBy({ idPost: id });
            if (!post) {
                return null;
            }
            return post;
        });
        this.remove = (id) => __awaiter(this, void 0, void 0, function* () {
            let post = yield this.postRepository.findOneBy({ idPost: id });
            if (!post) {
                return null;
            }
            return this.postRepository.delete({ idPost: id });
        });
        this.findByName = (search) => __awaiter(this, void 0, void 0, function* () {
            let sql = ` select p.content,p.image,p.role,p.time, u.userName from users u join posts p on u.idUser = p.idUser where u.userName like '%${search}%'`;
            let post = yield this.postRepository.query(sql);
            if (!post) {
                return null;
            }
            return post;
        });
        this.postRepository = data_soure_1.AppDataSource.getRepository(posts_1.Posts);
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map