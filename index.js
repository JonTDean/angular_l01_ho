"use strict";
var ContactCard = /** @class */ (function () {
    function ContactCard(firstName, lastName, phoneNumber, email) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    ContactCard.prototype.sendMessage = function () {
        console.log("Name: " + this.firstName + ", Phone Number: " + this.phoneNumber);
    };
    return ContactCard;
}());
var newPerson = new ContactCard('Henry', 'Caville', 1234567890, 'hc@hc.com');
newPerson.sendMessage();
