"use strict"
// * Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :*

if (confirm('Почати тестування?')) {
	// функция генерирования рандомного двумерного массива
	function generateRandomTable(arrsNum, elNum, minValue=1, maxValue=1000) {
		let table = [];
		for (let arrIndex = 0; arrIndex < arrsNum; arrIndex++) {
			table.push([]);
			for (let elIndex = 0; elIndex < elNum; elIndex++) {
				const randNum = minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
				table[arrIndex].push(randNum);
			}
		}
		return table;
	}

	// генерируем массив
	let allStoresWeekProfit = generateRandomTable(4, 7);

	// выводим в консоль для наглядности
	console.log(allStoresWeekProfit);

	// *загальний прибуток кожного масиву за тиждень;
	
	// for (let market = 0; market < allStoresWeekProfit.length; market++) {
	// 	const marketWeekProfit = allStoresWeekProfit[market].reduce((prevSum, el) => prevSum + el);
	// 	document.write(`
	// 		<p class="block">загальний прибуток за тиждень магазин-${market+1}: ${marketWeekProfit}</p>
	// 	`)
	// }

	allStoresWeekProfit.forEach((element, index) => {
		const marketWeekProfit = element.reduce((prevSum, el) => prevSum + el);
		document.write(`
			<p class="block">загальний прибуток за тиждень магазин-${index+1}: ${marketWeekProfit}</p>
		`)
	});

	// *загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

	for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
		let totalDayOfWeekProfitMarkets = 0;
		for (const market of allStoresWeekProfit) {
			totalDayOfWeekProfitMarkets += market[dayOfWeek];
		}
		document.write(`
			<p class="block">загальний прибуток усіх магазинів за ${dayOfWeek+1} день: ${totalDayOfWeekProfitMarkets}</p>
		`)
	}

	//* загальний прибуток за робочі дні
	// let marketWeekProfit = 0;
	// allStoresWeekProfit.forEach((market) => {
	// 	 marketWeekProfit += market.reduce((marketWeekProfit, day, index) => index < 5 ? marketWeekProfit + day : marketWeekProfit);
	// });
	let marketWorkDaysProfit = allStoresWeekProfit.reduce(
		(prevMarketWorkDaysProfit, market) => prevMarketWorkDaysProfit + market.reduce(
			(marketDayProfit, day, index) => index < 5 ? marketDayProfit + day : marketDayProfit
		), 0
	)

	document.write(`
		<p class="block">загальний прибуток за робочі дні: ${marketWorkDaysProfit}</p>
	`)

	//* загальний прибуток за вихідні дні
	let marketWeekEndProfit = allStoresWeekProfit.reduce(
		(prevMarketWeekEndProfit, market) => prevMarketWeekEndProfit + market.reduce(
			(marketDayProfit, day, index) => index >= 5 ? marketDayProfit + day : marketDayProfit, 0
		), 0
	)

	document.write(`
		<p class="block">загальний прибуток за вихідні дні: ${marketWeekEndProfit}</p>
	`)

	//* максимальний прибуток за середу
	let maxWednesdayProfit = -Infinity;
	
	for (const market of allStoresWeekProfit) {
		// market.forEach((day, index) => {
		// 	if (index == 2) day > maxWednesdayProfit ? maxWednesdayProfit = day : null
		// })
		market[2] > maxWednesdayProfit ? maxWednesdayProfit = market[2] : null
	}

	document.write(`
		<p class="block">максимальний прибуток за середу: ${maxWednesdayProfit}</p>
	`)

	//* сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
	let moreThan200Values = allStoresWeekProfit.flat(Infinity).filter(value => value > 200);
	document.write(`
		<p class="block">загальний список зі значенням, які що більші за 200: ${moreThan200Values}</p>
	`)

	//* відсортувати кожен тиждень за зростанням
	for (const market of allStoresWeekProfit) {
		market.sort(
			(el1, el2) => el1 - el2
		)
	}

	//* відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
	for (const market of allStoresWeekProfit) {
		let maxElement = Math.max(...market);
		market.sort(
			(maxElement, el2) => el2 - maxElement
		)
	}

	//* упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
	allStoresWeekProfit.sort(
		(market1, market2) => market2.reduce((prevSum, el)=>prevSum+el) - market1.reduce((prevSum, el)=>prevSum+el)
	)
}

