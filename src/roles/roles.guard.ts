import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core'
 
@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector:Reflector){}

  canActivate( context: ExecutionContext): boolean  {

    const requiredRoles= this.reflector.getAllAndOverride('roles',[

      context.getHandler(),
      context.getClass(),

    ]);
;
    console.log(requiredRoles)
    if (!requiredRoles) {
      console.log('no hay rol')
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log(user)
    return this.matchRoles(requiredRoles,user.admin)
    
  }

  matchRoles(requestedRol:string,rol:boolean){
    console.log('aqui match')
    
    if (requestedRol[0]==='admin' && rol===true){
      return true
    }else{
      return false
    }
  }
}
