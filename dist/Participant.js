"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const User_1 = require("./User");
const Activity_1 = require("./Activity");
const Registration_1 = require("./Registration");
const Instructor_1 = require("./Instructor");
const Certificate_1 = require("./Certificate");
class Participant extends User_1.User {
    constructor(username, password, name, role, email) {
        super(username, password, name, role, email);
    }
    searchActivity() {
        let activity = Activity_1.Activity.searchActivity();
        return activity;
    }
    registerForActivity(activity) {
        let registration = new Registration_1.Registration(1, this, activity, "Waiting For Verify...");
        return true;
    }
    downloadCertificate(activity) {
        return new Certificate_1.Certificate(1, "content", Instructor_1.Instructor, "ลายเซ็น", "กิจกรรม");
    }
    toString() {
        return `Participant[${super.toString()}]`;
    }
}
exports.Participant = Participant;
