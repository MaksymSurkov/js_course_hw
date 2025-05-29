"use strict"
// * Задача 6. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні.
// * При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.
// * При натисканні на зелену стрілку спортсмен переміщається у список для змагань.
// * При натисканні на червону стрілку спортсмен переміщається у загальний список.

const sportsmensList = ['John Depp', 'Sara Wik', 'Den Miro', 'Alan Woo', 'Olga Sich', 'Ivan Hal'];

function renderList(list) {
	const template = document.getElementById('template');
	const container = document.getElementById('condidats');
	list.forEach(item => {
		const clone = template.content.cloneNode(true); // глубокая копия шаблона
		clone.querySelector('.sportsmen__name').innerText = item;
		clone.querySelector('img').src = 'img/arrow-green.png';

		container.append(clone);
	});
}

function replaceCondidat(e) {
	//console.log(e.target);
	if (e.target.tagName === 'IMG') {

		let image = e.target;
		//console.log(image);

		let sportsmen = e.target.closest('.sportsmen');
		let condidats = document.getElementById('condidats');
		let winners = document.getElementById('winners');

		if (sportsmen.closest('#condidats')) {
			image.src = 'img/arrow-red.png';
			winners.append(sportsmen);
		} else if (sportsmen.closest('#winners')){
			image.src = 'img/arrow-green.png';
			condidats.append(sportsmen);
		}
	}
}

renderList(sportsmensList);

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.sportsmens').addEventListener('click', replaceCondidat);
})
