"use strict"
// * Задача 6. Створити окремі функції, які переводять:
// 1)	Сантиметри у дюйми;
// 2)	Кілограми у фунти;
// 3)	Кілометри у милі.


if (confirm('Почати тестування?')) {

	let userSantim = parseInt(prompt(`Введите сколько Вы хотите сантиметров перевести в дюймы`));
	let getInch = (inch) => inch / 2.54;
	let userKilogram = parseInt(prompt(`Введите сколько Вы хотите килограм перевести в фунты`));
	let getPound = (pound) => pound * 2.205;
	let userKilometr = parseInt(prompt(`Введите сколько Вы хотите километров перевести в мили`));
	let getMile = (mile) => mile / 1.609;


	document.write(`<p class="block">${userSantim} сантиметров, это ${(getInch(userSantim)).toFixed(3)} дюймов</p>`);
	document.write(`<p class="block">${userKilogram} килограм, это ${(getPound(userKilogram)).toFixed(3)} фунтов</p>`);
	document.write(`<p class="block">${userKilometr} километров, это ${(getMile(userKilometr)).toFixed(3)} миль</p>`);
}
