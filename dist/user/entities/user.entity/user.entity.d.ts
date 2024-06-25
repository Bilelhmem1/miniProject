import { TimestampEntity } from '../../../genrics/timestamp.entity';
import { UserTicketBookEntity } from 'src/user-ticket-book/entites/user-ticket-book.entity/user-ticket-book.entity';
export declare class UserEntity extends TimestampEntity {
    idU: number;
    firstname: string;
    lastname: string;
    Role: string;
    salt: string;
    cin: string;
    tel: string;
    email: string;
    password: string;
    UserTicketBookEntity: UserTicketBookEntity[];
}
