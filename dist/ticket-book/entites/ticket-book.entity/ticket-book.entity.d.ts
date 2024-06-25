import { TimestampEntity } from '../../../genrics/timestamp.entity';
import { UserTicketBookEntity } from 'src/user-ticket-book/entites/user-ticket-book.entity/user-ticket-book.entity';
export declare class TicketBookEntity extends TimestampEntity {
    id: number;
    code: string;
    prix: number;
    UserTicketBookEntity: UserTicketBookEntity[];
}
