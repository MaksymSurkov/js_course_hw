"use strict"
// * Задача 5. Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули)
// * та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі).
// * Обробку усіх помилок зробити з використанням відповідних класів.

//--------- Error Classes -------------
class InvalidMonthError extends Error {
	constructor() {
		super();
		this.message = "Місяць має бути числом від 1 до 12.";
		this.name = 'InvalidMonthError';
	}
}
class VacationMonthError extends Error {
	constructor() {
		super();
		this.message = "Зараз канікули. Оцінки не виправляються.";
		this.name = 'VacationMonthError';
	}
}
class InvalidGradeError extends Error {
	constructor() {
		super();
		this.message = "Оцінка має бути від 1 до 100.";
		this.name = 'InvalidGradeError';
	}
}
// ------------------------------------------------------------
class GradeChecker {
	constructor(month, grade) {
		this.month = Number(month);
		this.grade = Number(grade);
	}

	validateData() {
		// ------ проверяем если число, если от 1 до 12
		if (isNaN(this.month) || this.month < 1 || this.month > 12) {
			throw new InvalidMonthError();
		}
		// -------- проверяем если каникулы
		// if (this.month >= 6 && this.month <= 8) {
		// 	throw new VacationMonthError();
		// }
		if ([6, 7, 8].includes(this.month)) {
			throw new VacationMonthError();
		}
		// -------- проверяем если число, если от 1 до 100
		if (isNaN(this.grade) || this.grade < 1 || this.grade > 100) {
			throw new InvalidGradeError();
		}
		//return true;
	}

	canBeCorrected() {
		this.validateData(); // если все ок - код ниже продолжит выполняться, ретурнить тут а потом проверять я думаю ничего не нужно.
		// плохая оценка - меньше 60.
		// последнии месяцы симестра - май и декабрь.
		const isBadGrade = this.grade < 60; // true/false
		const isLastMonth = [5, 12].includes(this.month); // true/false
		return isBadGrade && !isLastMonth; // true && true -> true / false && false -> false / true && false -> false
	}
}

window.onload = function () {
	document.querySelector('.button').addEventListener('click', () => {
		const month = document.querySelector('.month').value;
		const grade = document.querySelector('.grade').value;
		const result = document.querySelector('.result');
	
		try {
			const checker = new GradeChecker(month, grade);
			if (checker.canBeCorrected()) {
				result.textContent = `Учень може виправити оцінку.`;
			} else {
				result.textContent = `Виправлення неможливе.`; // либо хорошая оценка, либо последний месяц семестра
			}
		} catch (error) {
			//console.log(error);
			if (error instanceof InvalidMonthError) {
				//console.log(error.message);
				result.textContent = error.message;
			} else if (error instanceof VacationMonthError) {
				//console.log(error.message);
				result.textContent = error.message;
			} else if (error instanceof InvalidGradeError) {
				//console.log(error.message);
				result.textContent = error.message;
			} else {
				result.textContent = 'Виправлення неможливе.';
			}
		}
	});
}
