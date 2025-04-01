"use strict"
// * Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):*

if (confirm('Почати тестування?')) {

	// функция генерирования рандомного двумерного массива
	function generateRandomTable(arrsNum, elNum, minValue=1, maxValue=100) {
		let table = [];
		for (let arrIndex = 0; arrIndex < arrsNum; arrIndex++) {
			table.push([]);
			for (let elIndex = 0; elIndex < elNum; elIndex++) {
				const randNum = minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
				table[arrIndex].push(randNum);
			}
		}
		return table;
	}

	// генерируем массив
	let randomTable = generateRandomTable(4, 10);

	// выводим в консоль для наглядности
	//console.log(randomTable);
	
	// универсальная функция нахождения суммы элементов
	function getArrElementsSum(arr, startArrIndex, endArrIndex, startElementIndex, endElementIndex) {
		let elementsSum = 0;

		for (let arrIndex = startArrIndex; arrIndex < endArrIndex; arrIndex++) {
			for (let elIndex = startElementIndex; elIndex < endElementIndex; elIndex++) {
				elementsSum += arr[arrIndex][elIndex];
			}
		}
		return elementsSum;
	}

	let arrLength = randomTable.length; // длина двумерного массива
	let elementLength = randomTable[0].length; // длина елемента двумерного массива
	let halfArrLength = Math.floor(randomTable.length / 2); // половина длины двумерного массива
	let halfElementLength = Math.floor(randomTable[0].length / 2); // половина длины елемента двумерного массива

	// *номери рядків від 0 до половини, стовпці від 0 до половини
	let sum1 = getArrElementsSum(randomTable, 0, halfArrLength, 0, halfElementLength);
	// выводим результат в консоль
	//console.log(sum1);

	// *номери рядків від 0 до половини, стовпці від половини до кінця
	let sum2 = getArrElementsSum(randomTable, 0, halfArrLength, halfElementLength, elementLength);

	// выводим результат в консоль
	//console.log(sum2);

	// *номери рядків від половини до кінця, стовпці від 0 до половини
	let sum3 = getArrElementsSum(randomTable, halfArrLength, arrLength, 0, halfElementLength);

	// выводим результат в консоль
	//console.log(sum3);

	// *номери рядків від половини до кінця , стовпці від половини до кінця
	let sum4 = getArrElementsSum(randomTable, halfArrLength, arrLength, halfElementLength, elementLength);

	// выводим результат в консоль
	//console.log(sum4);

	// *Суму парних рядків

	let sum5 = 0;
	for (let arrIndex = 1; arrIndex < randomTable.length; arrIndex += 2) {
		for (const elIndex of randomTable[arrIndex]) {
			sum5 += elIndex;
		}
	}
	//console.log(sum5);

	// *Суму непарних стовпців
	let sum6 = 0;
	for (const arrIndex of randomTable) {
		for (let elIndex = 0; elIndex < arrIndex.length; elIndex+=2) {
			sum6 += arrIndex[elIndex];
		}
	}
	//console.log(sum6);

	// *У парних рядках – непарні стовпці, у непарних – парні.
	function getBlablablaSum(arr, arrIndValue, elIndValue) {
		let blablaSum = 0;
		for (let arrIndex = arrIndValue; arrIndex < arr.length; arrIndex+=2) {
			for (let elIndex = elIndValue; elIndex < arr[arrIndex].length; elIndex += 2) {
				blablaSum += arr[arrIndex][elIndex];
			}
		}
		return blablaSum;
	}

	let sum7 = getBlablablaSum(randomTable, 1, 0);
	//console.log(sum7);

	let sum8 = getBlablablaSum(randomTable, 0, 1);
	//console.log(sum8);

	document.write(`
				<ol>
					<li>номери рядків від 0 до половини, стовпці від 0 до половини: ${sum1}</li>
					<li>номери рядків від 0 до половини, стовпці від половини до кінця: ${sum2}</li>
					<li>номери рядків від половини до кінця, стовпці від 0 до половини: ${sum3}</li>
					<li>номери рядків від половини до кінця , стовпці від половини до кінця: ${sum4}</li>
					<li>Суму парних рядків: ${sum5}</li>
					<li>Суму непарних стовпців: ${sum6}</li>
					<li>У парних рядках – непарні стовпці: ${sum7}</li>
					<li>у непарних – парні: ${sum8}</li>
				</ol>
		`)
}
