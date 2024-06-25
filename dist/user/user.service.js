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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers() {
        return await this.userRepository.find();
    }
    async adduser(user) {
        return await this.userRepository.save(user);
    }
    async UpdateUser(idU, user) {
        const newUser = await this.userRepository.preload({
            idU,
            ...user
        });
        if (!newUser) {
            throw new common_1.NotFoundException(`User d'id ${idU} n'existe pas`);
        }
        return await this.userRepository.save(newUser);
    }
    async Updateuser2(updateCriteria, user) {
        return this.userRepository.update(updateCriteria, user);
    }
    async deleteUser(id) {
        return await this.userRepository.delete(id);
    }
    async softDelete(id) {
        return await this.userRepository.softDelete(id);
    }
    async restoreUser(id) {
        this.userRepository.restore(id);
    }
    async register(userData) {
        const existingUser = await this.userRepository.findOne({ where: { email: userData.email } });
        if (existingUser) {
            throw new common_1.ConflictException('L\'email est déjà utilisé');
        }
        const user = this.userRepository.create({
            ...userData
        });
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        try {
            console.log(user);
            await this.userRepository.save(user);
        }
        catch (e) {
            throw new common_1.NotFoundException('L\'email et le mot de passe doivent être uniques');
        }
        return {
            idU: user.idU,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
        };
    }
    async login(credentials) {
        const { email, password } = credentials;
        const user = await this.userRepository.createQueryBuilder("user_entity")
            .where("user.email=:email or user.password=:password", { email }).getOne();
        if (!user) {
            throw new common_1.NotFoundException(`email or password erronée`);
        }
        const hashedPassword = await bcrypt.hash(password, user.salt);
        if (hashedPassword === user.password) {
            return {
                email,
                role: user.Role
            };
        }
        else {
            throw new common_1.NotFoundException(`email ou password est erronée `);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map