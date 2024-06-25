import { UserEntity } from './entities/user.entity/user.entity';
import { Repository } from 'typeorm';
import { Adduserdto } from './dto/Add-user.dto';
import { UpdateUserdto } from './dto/Update-user.dto';
import { LoginCredenttialDtio } from './dto/Login-Credenttial.dto';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getUsers(): Promise<UserEntity[]>;
    adduser(user: Adduserdto): Promise<UserEntity>;
    UpdateUser(idU: number, user: UpdateUserdto): Promise<UserEntity>;
    Updateuser2(updateCriteria: any, user: UpdateUserdto): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
    softDelete(id: number): Promise<import("typeorm").UpdateResult>;
    restoreUser(id: number): Promise<void>;
    register(userData: UserSubscribeDto): Promise<Partial<UserEntity>>;
    login(credentials: LoginCredenttialDtio): Promise<{
        email: string;
        role: string;
    }>;
}
