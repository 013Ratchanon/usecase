import { Participant } from './Participant';
import { User } from "./User";

export class Instructor extends User {

    constructor(username: string,password: string,name: string,role: string,email: string){
        super(username,password,name,role,email)
    }
public createActivity():void{

}
public approveParticipant(participant: Participant):void{

}
public issueCertificate():void{

}
public searchActivity(): void{

}
public toString(): string {
        return `Instructor[${super.toString()}]`
    }
}