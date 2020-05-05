import { Ticket } from './Ticket';
import { UserRole } from './UserRole'

export class User{
    userId:number;
    userName:string;
    password:string;
    userRole:UserRole;
    tickets:Array<Ticket>
}