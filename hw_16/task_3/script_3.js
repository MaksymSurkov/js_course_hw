"use strict"
// * Задача 3. Об’єкт “Фірма” (використати члени-класи)
// * поля: назва фірми; дата заснування (рік, місяць); послуги (назва послуги, вартість, термін виконання); адреси філіалів (країна, місто, вулиця, номер будинку);
// * метод: визначення кількості років існування фірми; виведення всіх філіалів фірми у вказаному місті; виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

if (confirm('Почати тестування?')) {

	class FoundDate {
		#year
		#month
		constructor(year, month) {
			this.Year = year;
			this.Month = month;
		}
		get Year() {
			return this.#year
		}
		set Year(year) {
			if (year <= 0) throw new Error('Некоректное значение!');
			this.#year = year;
		}
		get Month() {
			return this.#month
		}
		set Month(month) {
			if (month <= 0 || month > 12) throw new Error('Некоректное значение!');
			this.#month = month;
		}
		toString() {
			return `${this.#month}.${this.#year}`
		}
	}

	class Service {
		#title
		#price
		#termin
		constructor(title, price, termin) {
			this.Title = title;
			this.Price = price;
			this.Termin = termin;
		}
		get Title() {
			return this.#title
		}
		set Title(newTitle) {
			if (newTitle.lenght === 0) throw new Error('Некоректное значение!');
			this.#title = newTitle;
		}
		get Price() {
			return this.#price
		}
		set Price(newPrice) {
			if (newPrice < 0) throw new Error('Некоректное значение!');
			this.#price = newPrice;
		}
		get Termin(){
			return this.#termin
		}
		set Termin(newTermin) {
			if (newTermin < 0) throw new Error('Некоректное значение!');
			this.#termin = newTermin;
		}
		toString() {
			return `${this.#title} - вартість: ${this.#price}, термін виконання: ${this.#termin} дней<br>`
		}
	}

	class companyBranch {
		#country
		#city
		#street
		#houseNumber
		constructor(country, city, street, number) {
			this.Country = country;
			this.City = city;
			this.Street = street;
			this.HouseNumber = number;
		}
		get Country() {
			return this.#country
		}
		set Country(newCountry) {
			if (newCountry.lenght === 0) throw new Error('Некоректное значение!');
			this.#country = newCountry;
		}
		get City() {
			return this.#city
		}
		set City(newCity) {
			if (newCity.lenght === 0) throw new Error('Некоректное значение!');
			this.#city = newCity;
		}
		get Street(){
			return this.#street
		}
		set Street(newStreet) {
			if (newStreet.lenght === 0) throw new Error('Некоректное значение!');
			this.#street = newStreet;
		}
		get HouseNumber() {
			return this.#houseNumber;
		}
		set HouseNumber(newNumber) {
			if (newNumber <= 0) throw new Error('Некоректное значение!');
			this.#houseNumber = newNumber;
		}
		toString() {
			return `${this.#country}, ${this.#city}, ${this.#street}, ${this.#houseNumber}<br>`
		}
	}

	class Company {
		#title
		#foundDate
		#services
		#branches
		constructor(title, foundDate, services, branches) {
			this.Title = title;
			this.FoundDate = foundDate;
			this.Services = services;
			this.Branches = branches;
		}
		get Title() {
			return this.#title;
		}
		set Title(newTitle) {
			if (newTitle.lenght === 0) throw new Error('Некоректное значение!');
			this.#title = newTitle;
		}
		get FoundDate() {
			return this.#foundDate;
		}
		set FoundDate(newDate) {
			if (newDate.lenght === 0) throw new Error('Некоректное значение!');
			this.#foundDate = newDate;
		}
		get Services() {
			return this.#services;
		}
		set Services(servicesList) {
			if (servicesList.lenght === 0) throw new Error('Некоректное значение!');
			this.#services = servicesList;
		}
		get Branches() {
			return this.#branches;
		}
		set Branches(branchesList) {
			if (branchesList.lenght === 0) throw new Error('Некоректное значение!');
			this.#branches = branchesList;
		}
		toString() {
			return `
				<p>Назва фірми: ${this.#title}</p>
				<p>Дата заснування: ${this.#foundDate}</p>
				<ul>Послуги: ${this.#services.map(service => `<li style="margin-left:25px;">${service.Title}</li>`).join('')}</ul>
				<ul>Адреси філіалів: ${this.#branches.map(branch => `<li style="margin-left:25px;">${branch}</li>`).join('')}</ul>
			`
		}
		// * --- метод визначення кількості років існування фірми ---
		getCompanyLife() {
			let curentYear = 2025;
			let companyLife = curentYear - this.FoundDate.Year;
			return companyLife;
		}
		// * ---метод виведення всіх філіалів фірми у вказаному місті ---
		getCompanyBranches(city) {
			return this.Branches.reduce(
				(prevBranch, branch) => {
					if (branch.City === city) {
						prevBranch.push(branch);
					}
					return prevBranch;
				}, []);
		}
		// * --- виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу ---
		getCompanysServices(price, termin) {
			return this.Services.reduce(
				(prevServis, service) => {
					if (service.Price === price && service.Termin === termin) {
						prevServis.push(service);
					}
					return prevServis;
				}, []);
		}
	}

	try {
		let services = [
			new Service('Grooming', 500, 1),
			new Service('Support', 2500, 3),
			new Service('Marketing', 15000, 25),
			new Service('Delivery', 1000, 2),
			new Service('Cleaning', 1850, 1),
		];
		let branches = [
			new companyBranch('USA', 'NewYork', '16th Avenu', 256),
			new companyBranch('USA', 'Washington', '8th Avenu', 32),
			new companyBranch('Germany', 'Berlin', 'Friedrichstraße', 45),
			new companyBranch('United Kingdom', 'London', 'Baker Street', 221),
			new companyBranch('Canada', 'Toronto', 'Queen Street West', 108),
		]
		let foundDate = new FoundDate(2020, 5);
		let newCompany = new Company('XXX', foundDate, services, branches);
		console.log(foundDate);
		console.log(newCompany);
		document.write(newCompany);
		console.log(newCompany.getCompanyLife());
		console.log(newCompany.getCompanyBranches('NewYork'));
		console.log(newCompany.getCompanysServices(1000, 2));
	} catch (error) {
		alert(error.message);
	}
}