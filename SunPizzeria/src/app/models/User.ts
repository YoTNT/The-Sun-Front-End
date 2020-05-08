import { Ticket } from './Ticket';
import { UserRole } from './UserRole';

export class User{
    userId:number;
    userName:string;
    password:string;
    userRole:UserRole
    tickets: Set<Ticket> = new Set<Ticket>();

    constructor(userId:number, userName:string, password:string , userRole:UserRole){
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.userRole = userRole;
    }
}