"use strict"
// * Задача 4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером). *
// Шаг 0 - Обозначение
// возраст пользователя - userAge
// кем он является - userState

// Шаг 1 - Вводим необходимые значения
let userAge = parseInt(prompt(`Введите Ваш возраст`));
let userState;

// Шаг 2 - Розв"язок заадачі
if (userAge < 6 && userAge >= 2) 
	userState = 'ребенок в садике'
else if (userAge < 17 && userAge >= 6)
	userState = 'школьник'
else if (userAge < 21 && userAge >= 17)
	userState = 'студент'
else if (userAge < 65 && userAge >= 21)
	userState = 'працівник'
else if (userAge < 100 && userAge >= 65)
	userState = 'пенсионер'
else userState = 'вампир'
document.write (`<p class="block">Сошгласно введенного Вами возраста, Вы ${userState}</p>`)
	






