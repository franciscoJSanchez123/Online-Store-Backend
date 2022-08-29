import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { chatUsers } from './chatUsers.entity';
import { conversations } from './conversations.entity';
import { ChatController } from './chat.controller';

@Module({
    imports:[TypeOrmModule.forFeature([chatUsers,conversations])],
    providers:[ChatGateway, ChatService],
    controllers: [ChatController]
})
export class ChatModule {
    
}
