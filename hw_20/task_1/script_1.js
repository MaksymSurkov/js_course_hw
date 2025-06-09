"use strict"
// * Задача 1. Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент.

const people = [
	"John Smith",
	"Emma Johnson",
	"Michael Brown",
	"Olivia Davis",
	"William Garcia",
	"Sophia Martinez",
	"James Anderson",
	"Isabella Thomas",
	"Benjamin Lee",
	"Mia Walker"
];

class DynamicSearch {
	constructor(peopleList) {
		this.peopleList = peopleList;
	}

	createSearchForm() {
		const searchFormContainer = document.createElement('div');

		const searchLabel = document.createElement('label');
		searchLabel.innerText = 'Name';

		const searchInput = document.createElement('input');
		searchInput.placeholder = 'search';
		
		searchLabel.append(searchInput);
		searchFormContainer.append(searchLabel);
		
		this.inputEl = searchInput; // сохраняю input чтобы с ним взаимодействовать дальше
		this.inputEl.oninput = this.onPrint.bind(this); // при вводе компонент генерирует свое собственное/кастомное событие

		return searchFormContainer;
	}

	createPeopleList() {
		const peopleListContainer = document.createElement('div');
		peopleListContainer.className = 'people-list';

		for (const people of this.peopleList) {
			const peopleEl = document.createElement('div');
			peopleEl.innerText = people;
			peopleListContainer.append(peopleEl);
		}

		return peopleListContainer;
	}

	onPrint(e) {
		// генерирует кастомное событие при вводе в поле input, которое мы будем слушать.
		// можно и без этого (думаю что лишнее), для практики с кастомными событиями.
		const customEvent = new CustomEvent('mychange', {
			// опции
			detail: {
				input: this.inputEl.value // передаю значение инпута каждый раз при воде текста
			},
			bubbles: true,
		});
		
		//this.$el.dispatchEvent(customEvent); // слушаем на контейнере формы
		e.target.dispatchEvent(customEvent);
	}
	
	render(containerSelector) {
		// containerSelector - то куда будем вставлять наш обект
		const container = document.createElement('div');
		container.className = 'search-container';
		container.append(this.createSearchForm());
		container.append(this.createPeopleList());

		if (containerSelector) {
			document.querySelector(containerSelector).append(container);
		}

		this.$el = container;
		return container;
	}
}

window.onload = function () {
	const searchContainer = new DynamicSearch(people);
	searchContainer.render('.form');

	searchContainer.$el.addEventListener('mychange', function (e) {
		let peopleList = document.querySelector('.people-list').children;
		Array.from(peopleList).forEach(element => {
			element.style.display = "none";
			if (element.textContent.toLowerCase().includes(e.detail.input.toLowerCase())) {
				element.style.display = "block";
			}
		});
	});
}
