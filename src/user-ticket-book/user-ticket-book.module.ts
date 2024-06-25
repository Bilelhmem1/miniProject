import { Module } from '@nestjs/common';
import { UserTicketBookController } from './user-ticket-book.controller';
import { UserTicketBookService } from './user-ticket-book.service';
import { UserTicketBookEntity } from './entites/user-ticket-book.entity/user-ticket-book.entity';
import {TypeOrmModule} from '@nestjs/typeorm'
@Module({
  imports:[TypeOrmModule.forFeature([UserTicketBookEntity])],
  controllers: [UserTicketBookController],
  providers: [UserTicketBookService]
})
export class UserTicketBookModule {}
