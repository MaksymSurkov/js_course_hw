"use strict"
// * Задача 2. Створити клас Client. На основі цього класу створити клас GoldenClient.
//--------- Error Classes -------------
class IsNegativeNumberError extends Error {
	constructor() {
		super();
		this.message = "Не може бути від'ємним";
		this.name = 'IsNegativeNumberError';
	}
}
class IsEmpty extends Error {
	constructor() {
		super();
		this.message = "Не может быть пустым";
		this.name = 'IsEmpty';

	}
}
class InsufficientFunds extends Error {
	constructor() {
		super();
		this.message = "Не достаточно средств";
		this.name = 'InsufficientFunds';

	}
}
// -------------------------------------------------------------------
const client1 = {
	id: 11111,
	name: 'Maksim',
	surname: 'Surkov',
	patronymic: 'Igorovich',
	amount: 50000,
}
const client2 = {
	id: 22222,
	name: 'Maksim',
	surname: 'Surkov',
	patronymic: 'Igorovich',
	amount: 150000,
	creditLimit: 2000000,
	creditUsageFee: 5,
}

class Client {
	#clientId
	#clientName
	#clientSurname
	#clientPatronymic
	#clientMoneyAmount
	constructor(client) {
		this.ClientId = client.id;
		this.СlientName = client.name;
		this.СlientSurname = client.surname;
		this.ClientPatronymic = client.patronymic;
		this.СlientMoneyAmount = client.amount;
	}

	get ClientId() {
		return this.#clientId;
	}
	set ClientId(newClientId) {
		if (newClientId.length === 0) throw new IsEmpty();
		this.#clientId = newClientId;
	}
	get СlientName() {
		return this.#clientName;
	}
	set СlientName(newClientName) {
		if (newClientName.length === 0) throw new IsEmpty();
		this.#clientName = newClientName;
	}
	get СlientSurname() {
		return this.#clientSurname;
	}
	set СlientSurname(newClientSurname) {
		if (newClientSurname.length === 0) throw new IsEmpty();
		this.#clientSurname = newClientSurname;
	}
	get ClientPatronymic() {
		return this.#clientPatronymic;
	}
	set ClientPatronymic(newClientPatronymic) {
		if (newClientPatronymic.length === 0) throw new IsEmpty();
		this.#clientPatronymic = newClientPatronymic;
	}
	get СlientMoneyAmount() {
		return this.#clientMoneyAmount;
	}
	set СlientMoneyAmount(newСlientMoneyAmount) {
		if (newСlientMoneyAmount.length === 0) throw new IsEmpty();
		this.#clientMoneyAmount = newСlientMoneyAmount;
	}

	toString() {
		return `ID: ${this.#clientId}, Name: ${this.#clientName} ${this.#clientPatronymic} ${this.#clientSurname}, Balance: ${this.#clientMoneyAmount}`
	}

	addMoney(value) {
		if (value < 0) throw new IsNegativeNumberError();
		this.#clientMoneyAmount += value;
	}

	removeMoney(value) {
		if (value < 0) {
			throw new IsNegativeNumberError();
		} else if (value > this.#clientMoneyAmount) {
			throw new InsufficientFunds();
		}
		this.#clientMoneyAmount -= value;
	}
}

class GoldenClient extends Client {
	#creditLimit
	#creditUsageFee
	constructor(client) {
		super(client);
		this.CreditLimit = client.creditLimit;
		this.CreditUsageFee = client.creditUsageFee;
	}
	get CreditLimit() {
		return this.#creditLimit;
	}
	set CreditLimit(newCreditLimit) {
		if (newCreditLimit.length < 0) throw new IsNegativeNumberError();
		this.#creditLimit = newCreditLimit;
	}
	get CreditUsageFee() {
		return this.#creditUsageFee;
	}
	set CreditUsageFee(newCreditUsageFee) {
		if (newCreditUsageFee.length < 0) throw new IsNegativeNumberError();
		this.#creditUsageFee = newCreditUsageFee;
	}
	toString() {
		return super.toString() + `, Credit Limit: ${this.#creditLimit}, Credit Usage Fee: ${this.#creditUsageFee}`
	}
	addMoney(value) {
		super.addMoney(value)
	}
	removeMoney(value) {
		super.removeMoney(value);
	}
	getCreditPenaltyAmount() {
		return (this.#creditLimit * (this.#creditUsageFee / 100));
	}
}
// ------------------------------------------------------
window.onload = function() {
	// const client = new Client(client1);
	// const goldClient = new GoldenClient(client2);
	// document.querySelector('.text-1').textContent = client;
	// document.querySelector('.text-2').textContent = goldClient;
	//client.addMoney(500);
	// console.log(client.СlientMoneyAmount);
	// client.removeMoney(333);
	// console.log(client.СlientMoneyAmount);
	// goldClient.addMoney(333);
	// console.log(goldClient.getCreditPenaltyAmount());
	try {
		const client = new Client(client1);
		const goldClient = new GoldenClient(client2);
		document.querySelector('.text-1').textContent = client;
		document.querySelector('.text-2').textContent = goldClient;
		client.removeMoney(333000);
	} catch (err) {
		if (err instanceof IsEmpty) {
			console.log(err.message);
		} else if (err instanceof IsNegativeNumberError) {
			console.log(err.message);
		} else {
			console.log(err.message);
		}
	}
}
