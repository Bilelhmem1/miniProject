import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity/user.entity';
import { UpdateUserdto } from './dto/Update-user.dto';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
import { LoginCredenttialDtio } from './dto/Login-Credenttial.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserEntity[]>;
    updateUser(updateUserdto: UpdateUserdto, id: number): Promise<UserEntity>;
    updateUser2(updateObject: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    softdelete(id: number): Promise<import("typeorm").UpdateResult>;
    restoruser(id: number): Promise<void>;
    register(userData: UserSubscribeDto): Promise<Partial<UserEntity>>;
    login(Credentials: LoginCredenttialDtio): Promise<{
        email: string;
        role: string;
    }>;
}
