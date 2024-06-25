import {Entity,PrimaryGeneratedColumn,Column,OneToMany,JoinTable} from 'typeorm'
import {TimestampEntity } from '../../../genrics/timestamp.entity'
import { UserTicketBookEntity } from 'src/user-ticket-book/entites/user-ticket-book.entity/user-ticket-book.entity';




@Entity()
export class TicketBookEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique:true
    })
    code: string;
    @Column()
    prix: number;
    @OneToMany(() => UserTicketBookEntity,UserTicketBookEntity => UserTicketBookEntity.id)
public UserTicketBookEntity: UserTicketBookEntity[];
}
