"use strict"
// * Задача 5. З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). *
// * Вивести на екран назву транспортного засобу, яким він може керувати.*
// Шаг 0 - Обозначение
// водительская категория пользователя - userDriveLicense
// транспортное средство которым может управлять пользователь - userCar

// Шаг 1 - Вводим необходимые значения
let userDriveLicense = prompt(`Введите категорию Ваших водительских прав (A/B/C)`).toUpperCase();
console.log(userDriveLicense)
let userCar;

// Шаг 2 - Розв"язок заадачі
switch (userDriveLicense) {
	case 'A': userCar = 'мотоцикл'
		break;
	case 'B': userCar = 'легковой автомобиль'
		break;
	case 'C': userCar = 'грузовой автомобиль'
		break;
	default:
		userCar = 'Ваши ноги'
}
document.write(`<p class="block">Транспортное средство, которым Вы можете управлять ${userCar}</p>`)





