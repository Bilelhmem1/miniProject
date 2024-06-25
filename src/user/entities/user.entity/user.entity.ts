import{Entity} from 'typeorm/index'
import{PrimaryGeneratedColumn,Column} from 'typeorm'
import {TimestampEntity } from '../../../genrics/timestamp.entity';

@Entity()
export class UserEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    idU:number;
    @Column({
        type:'varchar',length:50
    })
        firstname:string;

    @Column()
    lastname:string;
    @Column({type:'varchar',length:6})
    Role:string;
    @Column({type:'varchar',length:8})
    cin:string;
    @Column({type:'varchar',length:8})
    tel:string;
    @Column({type:'varchar',length:100})
    email:string;
    @Column({type:'varchar',length:50})
    password:string;
    
}
