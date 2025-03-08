"use strict"
// * Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума *
// * (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів *
// * (поки він не відмовиться). Знаходити сумарний виграш.

if (confirm('Почати тестування?')) {
	function getRandomWinsArray(count, min = -500, max = 500) {
		let wins = [];
		for (let i = 0; i <= count; i++) {
			let randomWin = min + Math.floor(Math.random() * (max - min + 1));
			wins.push(randomWin);
		}
		return wins;
	}

	const winItems = parseInt(prompt('Введите количество элементов')); // не знаю как это назвать :)
	let winsArray = getRandomWinsArray(winItems);
	let totalWin = 0;


	if (winItems <= 0) {
		alert('Вы ввели некоректное число');
	} else {
		if (confirm(`Играем? Вам нужно будет ввести номер ячейки от 0 до ${winItems}, в которой будет Ваш выигрыш!`)) {
			do {
				let winItem = parseInt(prompt('Введите номер ячейки'));
				if (winItem > winItems || winItem < 0 || !winItem) {
					totalWin = 'Вы ввели некоректный номер. Всего хорошего!'
					break;
				} else {
					totalWin += winsArray[winItem];
					alert(`Ваш выигрыш: ${winsArray[winItem]}`)	
				}
			} while ((confirm(`Играем дальше?`)));
		}
		document.write(`Ваш сумарный выигрыш составил: ${totalWin}`)	
	}
}
