"use strict"
// * Задача 3. Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
// * Вивести всіх простих клієнтів;
// * Вивести всіх клієнтів GoldenClient;
// * Знайти сумарну кількість грошей на рахунку;
const clients = [
	{
		id: 11111,
		name: 'Maksim',
		surname: 'Surkov',
		patronymic: 'Igorovich',
		amount: 50001,
	},
	{
		id: 22222,
		name: 'Maksim',
		surname: 'Surkov',
		patronymic: 'Igorovich',
		amount: 150000,
		creditLimit: 2000000,
		creditUsageFee: 5,
	},
	{
		id: 33333,
		name: 'Anna',
		surname: 'Kovalenko',
		patronymic: 'Petrovna',
		amount: 30000,
		creditLimit: 500000,
		creditUsageFee: 3,
	},
	{
		id: 44444,
		name: 'Ivan',
		surname: 'Dubrovin',
		patronymic: 'Semenovich',
		amount: 120000,
	},
	{
		id: 55555,
		name: 'Elena',
		surname: 'Sidorova',
		patronymic: 'Nikolaevna',
		amount: 98000,
		creditLimit: 1000000,
		creditUsageFee: 4.5,
	},
	{
		id: 66666,
		name: 'Sergey',
		surname: 'Lysenko',
		patronymic: 'Alexandrovich',
		amount: 75000,
	},
	{
		id: 77777,
		name: 'Daria',
		surname: 'Melnik',
		patronymic: 'Olegovna',
		amount: 210000,
		creditLimit: 1500000,
		creditUsageFee: 6,
	},
	{
		id: 88888,
		name: 'Oleg',
		surname: 'Vasiliev',
		patronymic: 'Andreevich',
		amount: 43000,
	},
	{
		id: 99999,
		name: 'Natalia',
		surname: 'Moroz',
		patronymic: 'Grigorievna',
		amount: 89000,
		creditLimit: 700000,
		creditUsageFee: 2.5,
	},
	{
		id: 10101,
		name: 'Yuri',
		surname: 'Taran',
		patronymic: 'Leonidovich',
		amount: 134000,
	}
];
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
// ---------------------------------------------
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

class Bank {
	#clientsData; // здесь сохранится оригинальный источних входных данных по клиентам
	#clients = []; // Сюда будут сохраняться обычные и голд клиенты банка на основе исходного массива
	//---- Приватный метод определяет простой или золотой клиент и создает соответсвующий обьект
	#createClients(clientsArray) {
		return clientsArray.map(client => {
			if (client.creditLimit) { // допустим что кредитного лимита достаточно для того что бы клиент стал золотым
				return new GoldenClient(client);
			} else {
				return new Client(client);
			}
		});
	}
	// -------------------------------------------------------------------------------------
	constructor(clients = []) { // значение по умолчанию, что это всегда будет массив даже если в класс ничего не передадут то масств будет пустой (не вызовет ошибок в методах)
		this.ClientsData = clients;
		this.Clients = clients;
	}

	get ClientsData() {
		return this.#clientsData;
	}
	set ClientsData(newClients) {
		this.#clientsData = newClients;
	}

	get Clients() {
		return this.#clients;
	}
	set Clients(newClientsData) {
		this.#clients = this.#createClients(newClientsData);
	}

	get NormalClients() {
		// return this.#clients.reduce(
		// 	(prevClient, client) => {
		// 		if (!(client instanceof GoldenClient)) {
		// 			prevClient.push(client);
		// 		}
		// 		return prevClient;
		// 	}, []
		// );
		return this.#clients.filter(client => !(client instanceof GoldenClient));
	}
	get GoldenClients() {
		return this.#clients.filter(client => client instanceof GoldenClient);
	}

	getAllClientsMoney() {
		return this.#clients.reduce(
			(sum, client) => sum += client.СlientMoneyAmount, 0
		);
	}
}

window.onload = function () {
	try {
		const myBank = new Bank(clients);
		//console.log(myBank);
		//console.log(myBank.NormalClients);
		document.querySelector('.normal').textContent = myBank.NormalClients;
		document.querySelector('.golden').textContent = myBank.GoldenClients;
		console.log(myBank.getAllClientsMoney());
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