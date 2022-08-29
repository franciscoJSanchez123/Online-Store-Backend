import {chatUsers} from './../chat/chatUsers.entity'

export class CreateConversationsDto {
    conversationId?:string;
    user: chatUsers;
    messages:[];
    
  }