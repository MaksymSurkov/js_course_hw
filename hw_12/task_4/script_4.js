"use strict"
// * Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком .*

if (confirm('Почати тестування?')) {
	// функция для генерирования массива из рандомных значений
	function getRandomArr(length, min, max) {
		const arr = [];
		for (let i = 0; i < length; i++) {
			const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
			arr.push(randNum);
		}
		return arr;
	}

	// генерируем массив
	let numbersArr = getRandomArr(30, 1, 100);
	// выводим для наглядности
	document.write(`Оригинальный массив </br>${numbersArr}`);
	document.write(`<hr>`);

	// Сортируем Bublle
	document.write(`<div style="margin-top: 5px;">Сортировка Bublle</div>`);
	let bublleArr = (arr) => {
		let change, endIndex = arr.length;
		do {
			change = false;
			for (let i = 1; i < endIndex; i++) {
				if (arr[i-1]>arr[i]) {
					let tmp = arr[i - 1];
					arr[i - 1] = arr[i];
					arr[i] = tmp;
					change = true;
					document.write(`<div style="border: 1px solid #fff; margin-top: 5px;">${arr}</div>`);
				}
			}
			endIndex--
		} while (change);
	}
	const newBubleArr = Array.from(numbersArr);
	bublleArr(newBubleArr);

	// Сортируем Coctail
	document.write(`<div style="border: 1px solid #green; margin-top: 5px;">Сортировка Coctail</div>`);
	let coctailArr = (arr) => {
		let leftIndex = 0;
		let rightIndex = arr.length - 1;
		while (leftIndex < rightIndex) {
			//--- проходимось зліва-направо
			let change = false;
			for (let i = leftIndex + 1; i <= rightIndex; i++) {
				if (arr[i - 1] > arr[i]) {
					let temp = arr[i - 1];
					arr[i - 1] = arr[i];
					arr[i] = temp;
					change = true;
					document.write(`<div style="border: 1px solid #fff; margin-top: 5px;">${arr}</div>`);
				}
			}
			rightIndex--
			if (change === false) break
			//---- проходимось справа-наліво
			change = false;
			for (let i = rightIndex; i > leftIndex; i--) {
				if (arr[i - 1] > arr[i]) {
					let temp = arr[i - 1];
					arr[i - 1] = arr[i];
					arr[i] = temp;
					change = true;
					document.write(`<div style="border: 1px solid #fff; margin-top: 5px;">${arr}</div>`);
				}
			}
			leftIndex++
			if (change === false) break
		}
	}
	const newCoctailArr = Array.from(numbersArr);
	coctailArr(newCoctailArr);

	// Сортируем Insert
	document.write(`<div style="border: 1px solid #green; margin-top: 5px;">Сортировка Insert</div>`);
	let insertArr = (arr) => {
		for (let k = 0; k < arr.length; k++) {
			const currentElement = arr[k];
			let i = k - 1;
			while (i >= 0 && arr[i] > currentElement) {
				arr[i + 1] = arr[i];
				i = i - 1;
			}
			arr[i + 1] = currentElement;
		}
	}

	const newInsertArr = Array.from(numbersArr);
	insertArr(newInsertArr);
}

