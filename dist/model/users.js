"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const typeorm_1 = require("typeorm");
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Users.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 })
], Users.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Users.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Users.prototype, "birthDay", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Users.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Users.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' })
], Users.prototype, "image", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
exports.Users = Users;
//# sourceMappingURL=users.js.map