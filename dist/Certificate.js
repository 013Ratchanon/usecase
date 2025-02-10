"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
const Notification_1 = require("./Notification");
class Certificate {
    constructor(certificateId, content, iussuer, signature, template) {
        this.certificateId = certificateId;
        this.content = content;
        this.iussuer = iussuer;
        this.signature = signature;
        this.template = template;
    }
    generateCertificate() {
        let certificateId = new Certificate(this.certificateId, this.content, this.iussuer, this.signature, this.template);
        return certificateId;
    }
    sendCertificateNotification(participant) {
        let Notificate = new Notification_1.Notification(1, "พร้อมดาวน์โหลดแล้วคับ", participant, "");
    }
}
exports.Certificate = Certificate;
