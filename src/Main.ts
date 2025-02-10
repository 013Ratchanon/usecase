import { User } from "./User"
import { Participant } from "./Participant"
//import { Activity } from "./Activity"
import { Registration } from "./Registration"
import { Certificate } from "./Certificate"
import { Instructor } from "./Instructor"
console.log("################# User ##################")
const user1 = new User("Ratchanon", "022", "Tae", "student", "664259021@webmail.npru.ac.th")
console.log(user1.toString())
console.log("#############################################")
console.log("################# Participant ##################")
const participant1 = new Participant("Ratchanon", "022", "Tae", "student", "664259013@webmail.npru.ac.th")
console.log(participant1.toString())
console.log("#############################################")
console.log("################# Registration ##################")
//const registration1 = new Registration("1", participant1, activity1, "student")
console.log("#############################################")
console.log("################# User ##################")
const certificate1 = new Certificate(1, "กิจกรรมตกปลา", new Instructor(), "Ratchanon", "")
console.log(certificate1.toString())
console.log("#############################################")