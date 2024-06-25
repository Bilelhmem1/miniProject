import { TimestampEntity } from '../../../genrics/timestamp.entity';
import { UserEntity } from 'src/user/entities/user.entity/user.entity';
import { TicketBookEntity } from 'src/ticket-book/entites/ticket-book.entity/ticket-book.entity';
export declare class UserTicketBookEntity extends TimestampEntity {
    id: number;
    payed_amount: number;
    UserEntity: UserEntity;
    TicketBookEntity: TicketBookEntity;
}
