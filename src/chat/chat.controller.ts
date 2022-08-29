import { Controller, Get, Param, Post, Delete, Body, Put } from '@nestjs/common';
import  { ChatService} from '../chat/chat.service';
import { CreateConversationsDto} from '../chat/create-conversations.dto'

@Controller('chat')
export class ChatController {
    constructor(private chatService:ChatService){}

    @Get('/:id')
    findConversationById(@Param('id')id:string){
        return this.chatService.findConversationById(id)
    }

    @Post()
    createOrder(@Body()CreateConversationsDto:CreateConversationsDto){
        console.log("hola!!")
        return this.chatService.createConversation(CreateConversationsDto)
    }
}
