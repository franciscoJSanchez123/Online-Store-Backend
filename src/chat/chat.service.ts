import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';

import { chatUsers } from '../chat/chatUsers.entity';
import { CreateChatUsersDto} from '../chat/create-chat-users.dto';

import { conversations } from '../chat/conversations.entity';
import { CreateConversationsDto} from '../chat/create-conversations.dto';

@Injectable()
export class ChatService {

    chatUser:CreateChatUsersDto;
    constructor(
        @InjectRepository(chatUsers)
        private readonly chatUserDB:Repository<chatUsers>,
           
        @InjectRepository(conversations)
        private readonly conversationDB:Repository<conversations>

    ){}

    async findChatUser(name:string): Promise<chatUsers>{
        
        return await this.chatUserDB.findOne({name})
    }

    async findChatUserById(_id:string){
        console.log(_id)
        return await this.chatUserDB.findOne(_id)
    }

    async updateChatUserById(id:string,CreateChatUsersDto:CreateChatUsersDto){
        return await this.chatUserDB.update(id,CreateChatUsersDto)
    }


    async createConversation(CreateConversationsDto:CreateConversationsDto){
        const conversation= this.conversationDB.create(CreateConversationsDto)
        
        this.conversationDB.save(conversation)
        const userId=conversation.user._id
        
        this.chatUser= await this.findChatUserById(userId);
        
        if(this.chatUser){
           console.log(this.chatUser)
            this.chatUser.ConversationsId.push(conversation._id)
            this.updateChatUserById(userId,this.chatUser)
        }

    }

    async findConversationById(id:string){
        return await this.conversationDB.findOne(id)
    }
}
