"use strict"
// * Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.*
// Шаг 0 - Обозначение
// год рождения пользователя - userBirthYear
// текущий год - curentYear
// количесвто лет пользователя - userAge

// Шаг 1 - Вводим необходимые значения
const curentYear = 2025;
let userBirthYear = parseInt(prompt('Введите Ваш год рождения'));

// Шаг 2 - Вычесления результата
let userAge = curentYear - userBirthYear;

// Шаг 3 - Выводим результат
document.write(`
	<p>Вы родились в ${userBirthYear}</p>
	<h3 class="title">Ваш возраст в текущем году ${userAge} лет</h3>
	<a class="link" href="../hw2.html">Back to tasks</a>
`)
