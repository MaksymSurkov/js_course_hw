"use strict"
// * Задача 16. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. *
// * Маючи К снарядів користувач намагається потопити корабель. *

if (confirm('Почати тестування?')) {
	alert(`Игра "Морской бой". Вам нужно будет ввести размеры поля, количество снарядов и попытаться потопить корабль! Поехали?`)

	let fieldX = parseInt(prompt(`Введите количество клеточек поля по оси X (min 1)`));
	let fieldY = parseInt(prompt(`Введите количество клеточек поля по оси Y (min 1)`));
	let userShells = parseInt(prompt(`Введите количество снарядов`));

	let shipPositionX = 1 + Math.floor(Math.random() * fieldX);
	let shipPositionY = 1 + Math.floor(Math.random() * fieldY);
	// console.log(shipPositionX);
	// console.log(shipPositionY);

	alert(`Итак, у вас есть поле боя ${fieldX} * ${fieldY} клеточек и ${userShells} снарядов. Теперь попробуйте потопить корабль пока не закончатся снарядый. Удачи!`)
	
	for (let i = 1; i <= userShells; i++) {
		let userShotX = parseInt(prompt(`Введите координаты клеточки выстрела по оси X`));
		let userShotY = parseInt(prompt(`Введите координаты клеточки выстрела по оси Y`));
		
		if (userShotX === shipPositionX && userShotY === shipPositionY) {
			alert(`Ура! Вы потопили корабль с ${i} раза!`);
			break;
		} else if (Math.abs(userShotX - shipPositionX) <= 1 && Math.abs(userShotY - shipPositionY) <= 1) {
			alert(`Корабль ранен!`);
		} else {
			alert(`Мимо!`);
		};

		if (i === userShells) {
			alert(`К сожалению у Вас закончились снаряды!`);
		};
	}

}