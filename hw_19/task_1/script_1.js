"use strict"
// * Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

document.querySelector('.main__container').onclick = (e) => {
	const targetEl = e.target;
	//console.log(targetEl);
	if (targetEl.tagName === 'DIV') {
		let nextEl = targetEl.nextElementSibling;
		//console.log(nextEl);
		while (nextEl) {
			nextEl.style.background = "red";
			nextEl = nextEl.nextElementSibling;
		}
	}
}