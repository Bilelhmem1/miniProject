
import {Entity,PrimaryGeneratedColumn,Column,ManyToOne} from 'typeorm'
import {TimestampEntity } from '../../../genrics/timestamp.entity';
import { UserEntity } from 'src/user/entities/user.entity/user.entity';
import { TicketBookEntity } from 'src/ticket-book/entites/ticket-book.entity/ticket-book.entity';
@Entity()
export class UserTicketBookEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    payed_amount: number;
    @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.idU)
    public UserEntity: UserEntity

    @ManyToOne(() => TicketBookEntity, (TicketBookEntity) => TicketBookEntity.id)
    public TicketBookEntity:TicketBookEntity
}
