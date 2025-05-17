"use strict"
// * Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. 
// * Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. 
// * Введення та виведення дати реалізувати за допомогою методу toString

if (confirm('Почати тестування?')) {
	class TDate {

		constructor() {
			this.toString();
			// this.Year = year;
			// this.Day = day;
			// this.Month = month;
			//this.maxDays = 0;
		}
		#year
		get Year() {
			return this.#year
		}
		set Year(newYear) {
			// --- проверка---
			if (newYear <= 0) throw new Error('Некоректное значение!');
			// --- присвоение --
			this.#year = newYear;
		}
		#month
		get Month() {
			return this.#month
		}
		set Month(newMonth) {
			// --- проверка ---
			if (newMonth < 1 || newMonth > 12) {
				throw new Error('Некоректное значение!')
			}
			// --- присвоение --
			this.#month = newMonth;
		}
		#day
		get Day() {
			return this.#day
		}
		set Day(newDay) {
			// --- определяем количество дней в месяце ---
			let maxDays = this.getMaxDays(this.#month);
			// --- проверка---
			if (newDay < 1 || newDay > maxDays) {
				throw new Error('Некоректное значение дня этого месяца!')
			}
			// --- присвоение --
			this.#day = newDay;
		}

		toString() {
			if (!this.#year && !this.#month && !this.#day) {
				this.Year = parseFloat(prompt(`Введите год`));
				this.Month = parseFloat(prompt(`Введите месяц`));
				this.Day = parseFloat(prompt(`Введите число месяца`));
			} else {
				return `${this.Day}.${this.Month}.${this.Year}`;
			}
		}
		// ---- Метод определения количество дней в месяце ----
		getMaxDays(month) {
			switch (month) {
				case 2: return 28;
				case 4:
				case 6:
				case 9:
				case 11: return 30;
				default: return 31;
			}
		}
		// --- Метод збільшення дати на певну кількість днів ---
		incrDay(value) {
			if (value < 0) {
				throw new Error('При увеличении дня, введено некорректное значение!')
			}
			let day = this.#day + value;
			//console.log(day);
			let month = this.#month;
			let year = this.#year;

			while (true) {
				const maxDays = this.getMaxDays(month);

				if (day <= maxDays) break; // выходим из цикла

				day -= maxDays;
				month++;

				if (month > 12) {
					month = 1;
					year++;
				}
			}

			this.Year = year;
			this.Month = month;
			this.Day = day;
		}
		// --- Метод зменшення дати на певну кількість днів ---
		decrDay(value) {
			if (value < 0) {
				throw new Error('При уменьшении дня, введено некорректное значение!')
			}
			let day = this.#day - value;
			let month = this.#month;
			let year = this.#year;
		
			while (day < 1) {
				month--;
		
				if (month < 1) {
					month = 12;
					year--;
				}
		
				const maxDays = this.getMaxDays(month);
				day += maxDays;
			}
		
			this.Year = year;
			this.Month = month;
			this.Day = day;
		}
		// --- Метод збільшення дати на певну кількість місяців ---
		incrMonth(value) {
			if (value < 0) {
				throw new Error('При увеличении месяца, введено некорректное значение!')
			}
			let totalMonths = this.#month + value;
			let year = this.#year + Math.floor((totalMonths - 1) / 12);
			//console.log(year);
			let month = ((totalMonths - 1) % 12) + 1;
			//console.log(month);

		
			const maxDays = this.getMaxDays(month);
			let day = Math.min(this.#day, maxDays); // берём или старое число, или максимально возможное в месяце.
		
			this.Year = year;
			this.Month = month;
			this.Day = day;
		}
		// --- Метод зменшення дати на певну кількість місяців ---
		decrMonth(value) {
			if (value < 0) {
				throw new Error('При уменьшении мсяца, введено некорректное значение!')
			}
			let totalMonths = this.#month - value;
			let year = this.#year + Math.floor((totalMonths - 1) / 12);
			let month = ((totalMonths - 1) % 12) + 1;
		
			if (month <= 0) {
				month += 12;
				year--;
			}
		
			const maxDays = this.getMaxDays(month);
			let day = Math.min(this.#day, maxDays);
		
			this.Year = year;
			this.Month = month;
			this.Day = day;
		}
		// --- Метод збільшення дати на певну кількість років ---
		incrYear(value) {
			if (value < 0) {
				throw new Error('При увеличении года, введено некорректное значение!')
			}
			let year = this.#year + value;
			let month = this.#month;
		
			const maxDays = this.getMaxDays(month);
			let day = Math.min(this.#day, maxDays);
		
			this.Year = year;
			this.Month = month;
			this.Day = day;
		}
		// --- Метод зменшення дати на певну кількість років ---
		decrYear(value) {
			if (value < 0) {
				throw new Error('При уменьшении года, введено некорректное значение!')
			}
			let year = this.#year - value;
			let month = this.#month;
		
			const maxDays = this.getMaxDays(month);
			let day = Math.min(this.#day, maxDays);
		
			this.Year = year;
			this.Month = month;
			this.Day = day;
		}
	}

	try {
		const date1 = new TDate();
		//date1.toString()
		document.write(`${date1}<br>`);
	
		//* -- увеличиваем день---
		date1.incrDay(100);
		document.write(`${date1}<br>`);
		// console.log(date1);
		//* -- уменьшаем день
		date1.decrDay(-15);
		document.write(`${date1}<br>`);
	
		//* -- увеличиваем месяц--
		date1.incrMonth(20);
		document.write(`${date1}<br>`);
		//* -- уменьшаем месяц --
		date1.decrMonth(15);
		document.write(`${date1}<br>`);
	
		//* -- увеличиваем год--
		date1.incrYear(10);
		document.write(`${date1}<br>`);
		//* -- уменьшаем год --
		date1.decrYear(5);
		document.write(`${date1}<br>`);
		
	} catch (error) {
		alert(error.message);
	}
}