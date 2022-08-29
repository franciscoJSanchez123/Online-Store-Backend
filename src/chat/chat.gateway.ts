import {WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect} from '@nestjs/websockets';
import {Socket, Server} from 'socket.io'

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server:Server;

    async handleConnection(){ 
        console.log('alguien se conecto') 
    }

    async handleDisconnect(){  
    }

    @SubscribeMessage('create')
    onCreate(client:Socket, data:string){
       client.join(data);
       console.log(data);
       client.broadcast.emit("newRoom",data) /*esta es para que el mensaje le llegue a todos menos  al que lo envio */
       const rooms= this.server.of("/").adapter;
       console.log(rooms)
       /*console.log(this.server)*/
       
   }

    @SubscribeMessage('join')
     onJoin(client:Socket, data:string){
        client.join(data);
        console.log(data);
        client.emit("conexion",client.id) /*esta es para que el mensaje le llegue solo al que lo envio */
        /*client.broadcast.emit("conexion",client.id) *//*esta es para que el mensaje le llegue a todos menos  al que lo envio */
        const rooms= this.server.of("/").adapter;
        console.log(rooms)
        /*console.log(this.server)*/
        
    }

    @SubscribeMessage('message')
    onMessage(client:Socket,data:any){
        console.log(data.message);
        console.log('este es el mensaje que llego:',data)
        /* client.emit('message private', data)*/ /*esta es para que el mensaje le llegue solo al que lo envio */
        /*this.server.emit('message private', data) /*esta es para que el mensaje le llegue a todos incluyendo tambien a la persona que lo envio */
        client.in(data.room).emit('message private', data)/*esta es para que el mensaje le llegue a todos en el room menos al que lo envio */
       
    }

}