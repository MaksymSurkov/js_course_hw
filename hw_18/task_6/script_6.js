"use strict"
// * Задача 6. Користувач задає кількість оцінок і натискає на кнопку «get table». 
// * В результаті формується таблиця з input, куди користувач вводить оцінки. 
// * Після цього натискає на кнопку “get sum” і знаходить середнє значення

function createInput() {
	let input = document.createElement('input');
	//input.classList.add('price');
	input.className = 'price input';
	return input;
}

function getTable() {
	let container = document.querySelector('.form__table');
	let priceNumber = document.getElementById('price').value;
	for (let i = 0; i < priceNumber; i++) {
		container.append(createInput());
	}
}

function getAvgSum() {
	let numberList = document.querySelectorAll('.price');
	// let avgSum = numberList.reduce((prevSum, el) => prevSum + parseFloat(el.value), 0) / numberList.length; --- не работает с NodeList
	// ---------------------------------------------------------------------
	// let sum = 0;
	// for (const number of numberList) {
	// 	sum += parseFloat(number.value);
	// }
	// let avgSum = sum / numberList.length;
	// -------------------------------------------------------------------------
	let avgSum = Array.from(numberList).reduce((prevSum, el) => prevSum + parseFloat(el.value), 0) / numberList.length;
	document.getElementById('result').innerText = avgSum.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {

	document.getElementById('get-table').onclick = getTable;
	document.getElementById('get-sum').onclick = getAvgSum;
})