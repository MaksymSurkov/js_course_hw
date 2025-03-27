"use strict"
// * Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)*
      // 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн. 
      // 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
      // 3)Сформувати список з тих цін, які більші за попереднє значення
      // 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
      // 5)Підрахувати кількість змін цін
      // 6)Визначити, чи є ціна, що менше 1000
      // 7)Визначати, чи усі ціни більше за 1000
      // 8)Підрахувати кількість цін, що більше за 1000
      // 9)Підрахувати суму цін, що більше за 1000
      // 10)Знайти першу ціну, що більше за 1000
      // 11)Знайти індекс першої ціни, що більше за 1000
      // 12)Знайти останню ціну, що більше за 1000
      // 13)Знайти індекс останньої ціни, що більше за 1000

if (confirm('Почати тестування?')) {
	// функция для генерирования массива из рандомных значений
	function getRandomArr(length, min, max) {
		const arr = [];
		for (let i = 0; i < length; i++) {
			const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
			arr.push(randNum);
		}
		return arr;
	}

	// генерируем массив цен за 1 год
	let securitiesYearPrices = getRandomArr(12, 1, 10000);
	
	document.write(`
		<p class="block">Ціни на цінні папери за 1 рік (${securitiesYearPrices})</p>
	`);


	// *----------------- 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.*

	let getArrMoreThanSomeValue = (arr, value) => arr.filter(el => el > value);

	let newArrMoreThan1000 = getArrMoreThanSomeValue(securitiesYearPrices, 1000);
	document.write(`
		<p class="block">1) Цінні що більші за 1000 грн.: ${newArrMoreThan1000.length > 0 ? newArrMoreThan1000 : 'немає таких цін'}</p>
	`);

	// *------------------ 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.*

	// let getArrMoreThanSomeValueIndex = (arr, value) => {
	// 	const newArr = [];
	// 	for (let i = 0; i < arr.length; i++) {
	// 		if (arr[i] > value) newArr.push(i + 1);
	// 	}
	// 	return newArr;
	// }

	let getArrMoreThanSomeValueIndex = (arr, value) => {
		return arr.reduce((newArr, el, index) => {
			if (el > value) newArr.push(index + 1)
			return newArr
		}, []);
	};

	let newArrMoreThan1000Index = getArrMoreThanSomeValueIndex(securitiesYearPrices, 1000);

	document.write(`
		<p class="block">2) Номери цін що більші за 1000 грн.: ${newArrMoreThan1000Index.length > 0 ? newArrMoreThan1000Index : 'немає таких цін'}</p>
	`);

	// *------------------ 3)Сформувати список з тих цін, які більші за попереднє значення*
	
	let getNewArrMoreThanLastValue = arr => arr.filter((el, index, baseArr) => index > 0 && el > baseArr[index - 1]);

	let newArrMoreThanLastValue = getNewArrMoreThanLastValue(securitiesYearPrices);
	//console.log(typeof(newArrMoreThanLastValue[1]));
	
	document.write(`
		<p class="block">3) Список з тих цін, які більші за попереднє значення: ${newArrMoreThanLastValue.length > 0 ? newArrMoreThanLastValue : 'немає таких цін'}</p>
	`);

	// *------------------ 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального*
	function getPercent(arr) {
		const maxArrValue = Math.max(...arr);
		return arr.map(el => ((el / maxArrValue) * 100).toFixed(2) + '%');
	}
	
	let arrPercentPrices = getPercent(securitiesYearPrices);
	//console.log(typeof(arrPercentPrices[1]));
	document.write(`
		<p class="block">4) Цінні у відсотках стосовно максимального: ${arrPercentPrices}</p>
	`);

	// *------------------ 5)Підрахувати кількість змін цін*
	let changeCount = securitiesYearPrices.reduce(
		(agregateValue, el, index, arr) => (index !== 0 && el !== arr[index - 1] ? agregateValue + 1 : agregateValue), 0
	)
	document.write(`
		<p class="block">5) Кількість змін цін: ${changeCount} раз</p>
	`);

	// *------------------ 6)Визначити, чи є ціна, що менше 1000*
	let priceLessThan1000 = securitiesYearPrices.some(el => el < 1000)
	document.write(`
		<p class="block">6) Ціна, що менше 1000: ${priceLessThan1000? 'есть': 'нет'}</p>
	`);

	// *------------------ 7)Визначати, чи усі ціни більше за 1000*
	let everyPriceLessThan1000 = securitiesYearPrices.every(el => el < 1000)
	document.write(`
		<p class="block">7) Усі ціни більше за 1000?: ${everyPriceLessThan1000? 'да': 'нет'}</p>
	`);

	// *------------------ 8)Підрахувати кількість цін, що більше за 1000*
	let pricesMoreThan1000Count = securitiesYearPrices.reduce((count, el) => el > 1000? count + 1: count, 0)
	document.write(`
		<p class="block">8) Кількість цін, що більше за 1000: ${pricesMoreThan1000Count}</p>
	`);

	// *------------------ 9)Підрахувати суму цін, що більше за 1000*
	let pricesMoreThan1000Sum = securitiesYearPrices.reduce((count, el) => el > 1000? count + el: count, 0)
	document.write(`
		<p class="block">9) Сума цін, що більше за 1000: ${pricesMoreThan1000Sum}</p>
	`);

	// *------------------ 10)Знайти першу ціну, що більше за 1000*
	let firstPriceMoreThan1000 = securitiesYearPrices.find(el => el > 1000)
	document.write(`
		<p class="block">10) Перша ціна, що більше за 1000: ${firstPriceMoreThan1000 ? firstPriceMoreThan1000 : 'таких цен нет'}</p>
	`);

	// *------------------ 11)Знайти індекс першої ціни, що більше за 1000*
	let firstIndexPriceMoreThan1000 = securitiesYearPrices.findIndex(el => el > 1000)
	document.write(`
		<p class="block">11) Iндекс першої ціни, що більше за 1000: ${firstIndexPriceMoreThan1000 !== -1 ? firstIndexPriceMoreThan1000 : 'таких цен нет'}</p>
	`);

	// *------------------ 12)Знайти останню ціну, що більше за 1000*
	let lastPriceMoreThan1000 = securitiesYearPrices.findLast(el => el > 1000)
	document.write(`
		<p class="block">12) Остання ціна, що більше за 1000: ${lastPriceMoreThan1000 ? lastPriceMoreThan1000 : 'таких цен нет'}</p>
	`);

		// *------------------ 13)Знайти індекс останньої ціни, що більше за 1000*
		let lastIndexPriceMoreThan1000 = securitiesYearPrices.findLastIndex(el => el > 1000)
		document.write(`
			<p class="block">13) Iндекс останньої ціни, що більше за 1000: ${lastIndexPriceMoreThan1000 !== -1 ? lastIndexPriceMoreThan1000 : 'таких цен нет'}</p>
		`);
	
}
