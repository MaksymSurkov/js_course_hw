"use strict"
// * Задача 2. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат*
if (confirm('Почати тестування?')) {

	function generateDancePairs(peoples) {

		const pair = [];

		function findPairs(people = 0) {
			if (people >= peoples.length) return;

			const person = peoples[people];

			if (person.gender === 'boy') {
				for (let i = 0; i < peoples.length; i++) {
					const partner = peoples[i];
					if (partner.gender === 'girl') {
						pair.push(`${person.name} танцює з ${partner.name}`);
					}
				}
			}

			findPairs(people + 1); // переход к следующему человеку
		}

		findPairs();
		return pair;
	}

	const peoples = [
		{ name: 'Максим', gender: 'boy' },
		{ name: 'Олег', gender: 'boy' },
		{ name: 'Олена', gender: 'girl' },
		{ name: 'Ірина', gender: 'girl' }
	];

	const pairs = generateDancePairs(peoples);
	//console.log(pairs);
	document.write(`${pairs}`);
}