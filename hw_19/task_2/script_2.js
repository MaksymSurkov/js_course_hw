"use strict"
// * Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично
// * заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний),
// * усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)).

function changeInputs(e) {
	let inputsList = document.querySelectorAll('.main__inputs .input'); // получаю коллекцию инпутов
	//console.log(inputsList);

	let targetInputIndex = Array.from(inputsList).indexOf(e.target); // индекс инпута в котором произошли изменения
	//console.log(targetInputIndex);

	let targetValue = parseFloat(e.target.value); // значение текущего инпута, которое мы ввели
	//console.log(targetValue);

	for (let i = targetInputIndex - 1; i >= 0; i--) {
		inputsList[i].value = targetValue - (targetInputIndex - i); // дивгаемся вниз - старт: i = индекс текущего - 1
	}

	for (let i = targetInputIndex + 1; i < inputsList.length; i++) {
		inputsList[i].value = targetValue + (i - targetInputIndex); // двигаемся вверх - старт: i = индекс текущего + 1
	}
}


document.addEventListener('DOMContentLoaded', function () {

	const inputsContainer = document.querySelector('.main__inputs'); // контейнер на котором буду отслеживать события изменений значений input
	inputsContainer.addEventListener('input', changeInputs); // слушаем контейнер

})