"use strict"
// * Задача 3. Розробити клас MultChecker для перевірки таблиці множення.

if (confirm('Почати тестування?')) {
	
	class MultChecker {
		constructor(initNum) {
			this.number = initNum;
			this.correctAnswers = 0;
			this.wrongAnswers = 0;
		}

		// Генерування прикладу
		getRandomNum() {
			return Math.floor(Math.random() * 10);
		}

		// Перевірка правильності вказаної відповіді
		checkAnswer() {
			let num = this.getRandomNum();
			let answer = parseFloat(prompt(`Сколько будет ${this.number} * ${num}`));
			answer === this.number * num ? this.correctAnswers++ : this.wrongAnswers++;
		}

		// render - виведення інформації про тестування на екран
		showResult() {
			alert(`Правильных ответов - ${this.correctAnswers}\nНеправильных ответов - ${this.wrongAnswers}`)
		}
	}
	
	let multiChecker = new MultChecker(7);

	let runCheck = (value) => {
		for (let i = 0; i < value; i++) {
			multiChecker.getRandomNum();
			multiChecker.checkAnswer()
		}
	
		multiChecker.showResult();
	}

	runCheck(5);
}