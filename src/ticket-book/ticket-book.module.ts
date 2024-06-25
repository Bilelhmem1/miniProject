import { Module } from '@nestjs/common';
import { TicketBookController } from './ticket-book.controller';
import { TicketBookService } from './ticket-book.service';
import { TicketBookEntity } from './entites/ticket-book.entity/ticket-book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([TicketBookEntity])],
  controllers: [TicketBookController],
  providers: [TicketBookService]
})
export class TicketBookModule {}
