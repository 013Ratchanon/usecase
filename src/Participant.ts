import { User } from "./User";
import { Activity } from "./Activity";
import { Registration } from "./Registration";
import { Instructor } from './Instructor';
import { Certificate } from "./Certificate";
export class Participant extends User {

    constructor(username: string, password: string, name: string, role: string, email: string) {
        super(username, password, name, role, email)
    }
    public searchActivity(): Activity[] {
        let activity = Activity.searchActivity()
        return activity
    }
    public registerForActivity(activity: Activity): boolean {
        let registration = new Registration(1, this, activity, "Waiting For Verify...")
        return true
    }
    public downloadCertificate(activity: Activity): Certificate {
        return new Certificate(1,"content",Instructor,"ลายเซ็น","กิจกรรม")
    }
    public toString(): string {
        return `Participant[${super.toString()}]`
    }
}