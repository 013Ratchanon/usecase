import { Participant } from "./Participant"

export class Notification{
    private notificationId: number
    private message: string
    private recipient: Participant
    private status: string

    constructor(notificationId:number,message: string,recipient: Participant,status: string){
        this.notificationId =notificationId
        this.message =message
        this.recipient =recipient
        this.status =status
    }
    public toString(){
        return `Notification[notificationID = ${this.notificationId},${this.message},${this.recipient},${this.status}]`
    }
}