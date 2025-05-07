"use strict"
// * Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.

if (confirm('Почати тестування?')) {
	// функция генерирования рандомного двумерного массива (поле с зайцами)
	function generateRandomTable() {

		// создаём массив 6*6 из нулей
		const table = Array(6).fill().map(() => Array(6).fill(0));
		
		// ставим 5 единиц случайно (наши зайцы)
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

	class Shooter {
		constructor() {
			this.result = [];
			// можно бы было сюда и сам масив засунуть this.arr = generateRandomTable(); тогда в методы немного нужно было бы переписать. 
			// Но условие задачи что поле со свойствами только одно.
		}

		getShot(x, y, arr) {
			if (arr[x][y] === 'X') {
				alert(`Вы уже сюда стреляли!`);
				return;
			}
			if (arr[x][y] === 1) {
				alert(`Ура! Вы убили зайца!`);
				this.result.push(arr[x][y]);
			} else {
				alert(`Мимо!`)
				this.result.push(arr[x][y]);
			}

			arr[x][y] = 'X'; // пометили поле в которое уже стреляли
		}

		showTable(arr) {
			document.write(`<table class="table" style="margin-top:10px;">`);

			for (let row = 0; row < 6; row++) {
				document.write(`<tr style="border:1px solid #ffff">`);

				for (let col = 0; col < 6; col++) {
					document.write(`
						<td class="table__cell">${arr[row][col]}</td>
					`)
				}

				document.write(`</tr>`);
			}
			
			document.write(`</table>`);
		}
	}

	const shooter = new Shooter();

	for (let shot = 0; shot < 5; shot++) {

		let rowShot = parseFloat(prompt('Введите позицию по горизонтали X (от 0 до 5)'));
		let colShot = parseFloat(prompt('Введите позицию по вертикали Y (от 0 до 5)'));

		shooter.getShot(rowShot, colShot, randomTable)
		//console.log(randomTable);
	}

	shooter.showTable(randomTable)
	//console.log(shooter);
}