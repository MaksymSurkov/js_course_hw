"use strict"
// * Задача 1. Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження).
// * На основі класу Person  розробити клас Worker (додати поля: посада, розмір заробітної плати,
// * кількість відсотів оподаткування; методи:визначення кількості виплачених коштів за рік, та визначення розміру податків).

const adressData = {
	country: 'Ukraine',
	city: 'Odessa',
	street: 'Lazareva',
	house: 79,
	flat: 21,
	zip: 65000,
}

class Person {
	#name
	#age
	#adress
	constructor(name, age, adress) {
		this.Name = name;
		this.Age = age;
		this.Adress = adress
	}

	get Name() {
		return this.#name;
	}
	set Name(newName) {
		if (newName.lenght === 0) throw new Error('Некоректное значение!');
		this.#name = newName;
	}
	get Age() {
		return this.#age;
	}
	set Age(newAge) {
		if (newAge.lenght === 0 || newAge <=0) throw new Error('Некоректное значение!');
		this.#age = newAge;
	}
	get Adress() {
		return this.#adress;
	}
	set Adress(newAdress) {
		if (newAdress.lenght === 0) throw new Error('Некоректное значение!');
		this.#adress = newAdress;
	}

	getBirthYear() {
		let age = this.#age;
		let curentYear = 2025;
		return curentYear - age;
	}

	toString() {
		return `Name: ${this.#name}, BirthYear: ${this.getBirthYear()}, ${this.#age} years old, Adress: ${this.#adress.country}, ${this.#adress.city}`
	}
}

class Worker extends Person {
	#position
	#salary
	#taxPercent
	constructor(name, age, adress, position, salary, tax, month) {
		super(name, age, adress);
		this.Position = position;
		this.Salary = salary;
		this.TaxPercent = tax;
		this.month = month;
	}
	get Position() {
		return this.#position;
	}
	set Position(newPosition) {
		if (newPosition.lenght === 0) throw new Error('Некоректное значение!');
		this.#position = newPosition;
	}
	get Salary() {
		return this.#salary;
	}
	set Salary(newSalary) {
		if (newSalary.lenght === 0 || newSalary < 0) throw new Error('Некоректное значение!');
		this.#salary = newSalary;
	}
	get TaxPercent() {
		return this.#taxPercent;
	}
	set TaxPercent(newTaxPercent) {
		if (newTaxPercent.lenght === 0 || newTaxPercent < 0) throw new Error('Некоректное значение!');
		this.#taxPercent = newTaxPercent;
	}

	getTaxValue(month = 1) {
		return (this.#salary * (this.#taxPercent / 100)) * month;
	}
	getNetSalary(month = 1) {
		return (this.#salary - this.getTaxValue()) * month;
	}
	toString() {
		return super.toString() + `
			Salary for ${this.month} month: ${this.getNetSalary(this.month)}, total tax for ${this.month} month: ${this.getTaxValue(this.month)}
		`
	}
}

window.onload = function() {
	//const person = new Person('Maksim', 39, adressData);
	const person = new Worker('Maksim', 39, adressData, 'Director', 50000, 20, 12);
	document.querySelector('.text-1').append(person);
}
