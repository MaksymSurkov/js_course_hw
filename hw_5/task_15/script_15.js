"use strict"
// * Задача 15. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень.* 
// * Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, *
// * три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).*

if (confirm('Почати тестування?')) {
	let imageLink; // переменая для вывода картинок
	let imageOne = 0; // счетчик сколько раз вывелась первая картинка
	let imageTwo = 0; // счетчик сколько раз вывелась вторая картинка
	let imageThree = 0; // счетчик сколько раз вывелась третья картинка
	let imageFour = 0; // счетчик сколько раз вывелась четвертая картинка

	document.write(`<div class="container">`)

	for (let j = 0; j < 3; j++) {
		// рандомно выбераем 1 из 4 картинок
		let randomNumber = 1 + Math.floor(Math.random() * 4);
		switch (randomNumber) {
			case 1: imageLink = "img/cherry.png"
				break;
			case 2: imageLink = "img/grape.jpg"
				break;
			case 3: imageLink = "img/strawberry.png"
				break;
			case 4: imageLink = "img/watermelon.png"
				break;
		}
		// выводим картинку
		document.write(`<img src="${imageLink}" alt="Image" style = "width: 150px">`)
		// подсчитываем сколько раз вывелась картинка
		switch (randomNumber) {
			case 1: imageOne++
				break;
			case 2: imageTwo++
				break;
			case 3: imageThree++
				break;
			case 4: imageFour++
				break;
		}

	}

	document.write(`</div>`)
	// проверяем если игрок получил комбинацию из трех одинаковых картинок
	if (imageOne === 3 ) {
		document.write(`<h2 style = "font-size: 18px;">вы выиграли 100грн!</h2>`)
	} else if (imageTwo === 3){
		document.write(`<h2 style = "font-size: 18px;">вы выиграли 200грн!</h2>`)
	} else if (imageThree === 3){
		document.write(`<h2 style = "font-size: 18px;">вы выиграли 500грн!</h2>`)
	} else if (imageFour === 3){
		document.write(`<h2 style = "font-size: 18px;">вы выиграли 1000грн!</h2>`)
	} else {
		document.write(`<h2 style = "font-size: 18px;">вы проиграли!</h2>`)
	}
}