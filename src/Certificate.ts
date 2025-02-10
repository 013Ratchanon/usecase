import { Instructor } from './Instructor';
import { Notification } from './Notification';
import { Participant } from './Participant';


export class Certificate {
    private certificateId:number
    private content:string
    private iussuer:Instructor
    private signature:string
    private template:string

    constructor(certificateId:number,content:string,iussuer:Instructor,signature:string,template:string){

        this.certificateId=certificateId
        this.content=content
        this.iussuer=iussuer
        this.signature=signature
        this.template=template
    }
    public generateCertificate():Certificate{
        let certificateId = new Certificate(this.certificateId,this.content,this.iussuer,this.signature,this.template)
        return  certificateId
    }
    public sendCertificateNotification(participant: Participant):void{
        let Notificate = new Notification(1,"พร้อมดาวน์โหลดแล้วคับ",participant,"")
    }
    
}