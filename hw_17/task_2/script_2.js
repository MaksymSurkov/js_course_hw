"use strict"
// * Задача 2. Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

if (confirm('Почати тестування?')) {
	class CompanyCar {
		static companyCar;
		constructor(driver, lable, number) {
			if (CompanyCar.companyCar) {
				return CompanyCar.companyCar;
			}
			this.driver = driver;
			this.carLable = lable;
			this.carNumber = number;
			CompanyCar.companyCar = this;
		}
	}

	let companyCar = new CompanyCar('Jason', 'Audi', 'XX555XX');
	console.log(companyCar);
	let companyCar2 = new CompanyCar('Max', 'BMW', 'WWW553XX');
	console.log(companyCar2);
}