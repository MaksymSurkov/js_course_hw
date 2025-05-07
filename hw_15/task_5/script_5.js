"use strict"
// * Задача 5. Розробити клас «Керівник танців»

if (confirm('Почати тестування?')) {
	const maleNames = [
		"Александр",
		"Максим",
		"Дмитрий",
		"Артём",
		"Иван",
		"Михаил",
		"Никита",
		"Егор",
		"Андрей",
		"Тимофей"
	];
	const femaleNames = [
		"Анна",
		"Мария",
		"Екатерина",
		"Алиса",
		"Полина",
		"София",
		"Дарья",
		"Виктория",
		"Елена",
		"Ксения"
	];
		
	
	
	class Instructor {
		constructor(initMale, initFemale) {
			this.male = initMale;
			this.female = initFemale;
		}

		// Метод випадкового вибору імені хлопця
		getRandomMale() {
			return this.male[Math.floor(Math.random() * this.male.length)];
		}
		// Метод випадкового вибору імені дівчини
		getRandomFemale() {
			return this.female[Math.floor(Math.random() * this.female.length)];
		}
		// Метод виведення пари для танців
		showDancingCouple() {
			let male = this.getRandomMale();
			let female = this.getRandomFemale();
			document.write(`${male} танцует с ${female}<br>`)
		}
		// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
		run(value) {
			let count = 0;
			let timeoutId = setInterval(
				() => {
					if (count === value) {
						clearInterval(timeoutId);
					} else {
						this.showDancingCouple();
						count++;
					}
				}, 5000
			)
		}
	}
	
	let instructor = new Instructor(maleNames, femaleNames);
	instructor.run(5);
}