"use strict"
// * Задача 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А» *

if (confirm('Почати тестування?')) {
	const autoNumbers = ['AK9565AK', 'BB4177BI', 'BA2588BA', 'AB1604BI', 'KA2313HK', 'AA0000AA', 'AX5115HP', 'AO5142KI', 'BH2569IB']

	document.write(`все автомобильные номера в базе: ${autoNumbers} <br>`);

	let conditionForNewArray = 'A'.charCodeAt();
	//------------Пытался сделать с помощью .map, но он мне даже с if возвращал пустой элемент, delete аналогично.----------------
	let newAutoNumbers = (arr, condition) => {
		let newArr = [];
		arr.forEach( item => {
			if (item.charCodeAt(0) === condition) {
				newArr.push(item);
			}
		});
		return newArr;
	}

	// ----------------Вариант без функции
	// let newAutoNumbers = [];
	// autoNumbers.forEach( item => {
	// 	if (item.charCodeAt(0) === conditionForNewArray) {
	// 		newAutoNumbers.push(item)
	// 	}
	// });
	
	document.write(`номера которые начинаются на "А": ${newAutoNumbers(autoNumbers, conditionForNewArray)}`);
}
