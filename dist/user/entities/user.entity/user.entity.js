"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const index_1 = require("typeorm/index");
const typeorm_1 = require("typeorm");
const timestamp_entity_1 = require("../../../genrics/timestamp.entity");
const user_ticket_book_entity_1 = require("../../../user-ticket-book/entites/user-ticket-book.entity/user-ticket-book.entity");
const user_role_enum_1 = require("../../../enums/user-role.enum");
const class_transformer_1 = require("class-transformer");
let UserEntity = class UserEntity extends timestamp_entity_1.TimestampEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "idU", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar', length: 50
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: user_role_enum_1.UserRoleEnum,
        default: user_role_enum_1.UserRoleEnum.USER
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "Role", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 8 }),
    __metadata("design:type", String)
], UserEntity.prototype, "cin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 8 }),
    __metadata("design:type", String)
], UserEntity.prototype, "tel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100,
        unique: true
    }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50,
        unique: true
    }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_ticket_book_entity_1.UserTicketBookEntity, UserTicketBookEntity => UserTicketBookEntity.id),
    __metadata("design:type", Array)
], UserEntity.prototype, "UserTicketBookEntity", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, index_1.Entity)()
], UserEntity);
//# sourceMappingURL=user.entity.js.map