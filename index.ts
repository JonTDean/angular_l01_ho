interface Person {
	firstName: string;
	lastName?: string;
}

interface Contact {
	phoneNumber: number;
	email?: string;
}

class ContactCard implements Person, Contact {
	firstName: string;
	lastName: string;
	phoneNumber: number;
	email: string;

	constructor(
		firstName: string,
		lastName: string,
		phoneNumber: number,
		email: string
	) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}

	sendMessage() {
		console.log(`Name: ${this.firstName}, Phone Number: ${this.phoneNumber}`);
	}
}

let newPerson = new ContactCard('Henry', 'Caville', 1234567890, 'hc@hc.com');
