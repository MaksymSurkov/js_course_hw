"use strict"
// * Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами 
// * (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). 
// * При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний

function getRandomNumber(min = 1, max = 10) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderNumbersLists() {
	let listContainer = document.querySelector('.main__list-2');
	listContainer.replaceChildren(); // удаляем все содержимое контейнера что бы не создавались при повторном нажатии дополнительные списки
	for (let i = 0; i < 5; i++) {
		let olEl = document.createElement('ol');
		let liElValue = getRandomNumber();
		for (let l = 0; l < liElValue; l++) {
			let liEl = document.createElement('li');
			liEl.innerText = getRandomNumber(1, 100);
			olEl.append(liEl);
		}
		listContainer.append(olEl);
	}
}

function paintLists() {
	let listsCollection = document.querySelectorAll('ol');
	//console.log(listsCollection);
	for (const list of listsCollection) {
		if (list.children.length % 2 === 0) {
			list.style.background = 'green';
		} else {
			list.style.background = 'red';
		}
	}
	
}

document.querySelector('.button').addEventListener("click", renderNumbersLists);
document.querySelector('.button--color').addEventListener('click', paintLists);