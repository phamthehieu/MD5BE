"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const typeorm_1 = require("typeorm");
let Posts = class Posts {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Posts.prototype, "idPost", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' })
], Posts.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Posts.prototype, "imagePost", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Posts.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Posts.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Posts.prototype, "time", void 0);
Posts = __decorate([
    (0, typeorm_1.Entity)()
], Posts);
exports.Posts = Posts;
//# sourceMappingURL=posts.js.map