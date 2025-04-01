"use strict"
// * Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. 
// * Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.*

if (confirm('Почати тестування?')) {
	// функция генерирования рандомного двумерного массива
	function generateRandomTable() {

		// создаём массив 6*6 из нулей
		const table = Array(6).fill().map(() => Array(6).fill(0));
	 
		// ставим 5 единиц случайно
		let count = 0;
		while (count < 5) {
		  const arr = Math.floor(Math.random() * 6);
		  const el = Math.floor(Math.random() * 6);
		  if (table[arr][el] === 0) {
			 table[arr][el] = 1;
			 count++;
		  }
		}
		return table;
	}

	// генерируем массив
	let randomTable = generateRandomTable();

	// выводим в консоль для наглядности
	console.log(randomTable);

	let shots = parseFloat(prompt('Введите желаемое количество попыток'));

	for (let shot = 1, ships = 5; shot <= shots; shot++) {

		let rowShot = parseFloat(prompt('Введите координаты по горизонтали X (от 0 до 5)'));
		let colShot = parseFloat(prompt('Введите координаты по вертикали Y (от 0 до 5)'));

		if (randomTable[rowShot][colShot] === 'X') {
			alert(`Вы уже сюда стреляли!`);
			continue;
		}

		if (randomTable[rowShot][colShot] === 1) {
			alert(`Ура! Вы потопили корабль! Осталось ${ships-1} кораблей`)
			ships--
			if (ships === 0) {
				alert(`Ура! Вы потопили все корабли`);
				break;
			}
		} else {
			alert(`Мимо! У Вас еще ${shots - shot} попытки`)
		}

		randomTable[rowShot][colShot] = 'X'; // пометили поле в которое уже стреляли

		if(shot===shots ) alert(`Вы проиграли`)
	}

}

