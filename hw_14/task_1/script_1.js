"use strict"
// * Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
//* ----- Властивості ------
//* -	назва компанії на час розробки (назву періодично змінюють)
//* -	власник компанії
//* -	споснсори (масив спонсорів):
//       * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
//* -	рік випуску
//* -	вартість сайту

if (confirm('Почати тестування?')) {
	const webSites = [
		{
			name: "WebStudio Alpha",
			owner: "Олена Ковальчук",
			sponsors: [
				{lastName: "Іваненко", firstName: "Петро", investment: 10000},
				{lastName: "Сидоренко", firstName: "Марія", investment: 7000}
			],
			releaseYear: 2021,
			siteCost: 25000 // 8000
		},
		{
			name: "DigitalCraft",
			owner: "Сергій Назаренко",
			sponsors: [
				{lastName: "Кравченко", firstName: "Ігор", investment: 5000},
				{lastName: "Литвин", firstName: "Оксана", investment: 12000},
				{lastName: "Гуменюк", firstName: "Наталія", investment: 3000}
			],
			releaseYear: 2022,
			siteCost: 32000 // 12000
		},
		{
			name: "TechVerse",
			owner: "Ірина Шевчук",
			sponsors: [
				{lastName: "Коваль", firstName: "Андрій", investment: 15000}
			],
			releaseYear: 2020,
			siteCost: 18000 // 3000
		},
		{
			name: "NetBuilders Inc.",
			owner: "Андрій Мельник",
			sponsors: [
				{lastName: "Петренко", firstName: "Ілля", investment: 4000},
				{lastName: "Романюк", firstName: "Інна", investment: 6000}
			],
			releaseYear: 2003,
			siteCost: 12000 // 2000
		},
		{
			name: "CreativeWeb",
			owner: "Оксана Литвин",
			sponsors: [
				{lastName: "Демченко", firstName: "Олег", investment: 8500}
			],
			releaseYear: 2007,
			siteCost: 14000 // 3500
		},
		{
			name: "StartUp WebLab",
			owner: "Юрій Ткаченко",
			sponsors: [
				{lastName: "Захарченко", firstName: "Галина", investment: 100000},
				{lastName: "Козак", firstName: "Станіслав", investment: 2000}
			],
			releaseYear: 2005,
			siteCost: 165000 // 63000
		}
	];
	
	//* ---------------------------------------------------- 1. загальну вартість усіх сайтів

	const totalSitesCost = webSites.reduce(
		(prevTotalSitesCoast, site) => prevTotalSitesCoast + site.siteCost, 0
	);
	document.write(`1. загальну вартість усіх сайтів = ${totalSitesCost}<br>`);


	//* --------------------------------------------------- 2. кількість сайтів, що було зроблено між 2000 та 2009 рр.

	const oldSitesCount = webSites.reduce(
		(prevOldSitesCount, site) => site.releaseYear >= 2000 && site.releaseYear <= 2009 ? prevOldSitesCount + 1 : prevOldSitesCount, 0
	);
	document.write(`2. кількість сайтів, що було зроблено між 2000 та 2009 рр. = ${oldSitesCount}<br>`);


	//* -------------------------------------------------- 3. кількість сайтів, де сума спонсорських вкладень була більшою за 100000

	const totalSitesSponsoredOver100000 = webSites.reduce(
		(prevSponsoredOver, site) => site.sponsors.reduce(
			(prevInvest, sponsor) => prevInvest + sponsor.investment, 0
		) > 100000 ? prevSponsoredOver + 1 : prevSponsoredOver, 0
	);
	document.write(`3. кількість сайтів, де сума спонсорських вкладень була більшою за 100000 = ${totalSitesSponsoredOver100000}<br>`);


	//* -------------------------------------------------- 4. створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

	// const sponsorsList = webSites.map(
	// 	(site) => site.sponsors
	// )

	const sponsorsList = webSites.map(
		(site) => site.sponsors
	).flat(Infinity)

	console.log(sponsorsList);
	//document.write(`${sponsorsList}`);

	//* ------------------------------------------------- 5. знайти рік, коли прибуток був найбільшим
	
	function getProfit({ siteCost, sponsors }) {
		let profit = siteCost - sponsors.reduce(
			(prevInvest, sponsor) => prevInvest + sponsor.investment, 0
		)
		return profit;
	}

	function getMaxProfitYear(arr) {
		let curentMaxProfitYear;
		let maxProfit = 0;
	
		for (const site of arr) {
			let siteProfit = getProfit(site);
			if (siteProfit > maxProfit) {
				curentMaxProfitYear = site.releaseYear;
				maxProfit = siteProfit;
			}
		}
		//console.log(maxProfit);
		return curentMaxProfitYear;
	}

	const maxProfitYear = getMaxProfitYear(webSites);
	console.log(maxProfitYear);

	//* ------------------------------------------------- 6. упорядкувати список за спаданням прибутку

	//Функція обміну елементів місцями
	function swap(A, i, j) {
		let temp = A[i]
		A[i] = A[j]
		A[j] = temp
	}

	//Поділ фрагменту від p до q
	//на дві частини (<=pivot та >pivot)
	function Partition(A, p, q) {
		let pivot = getProfit(A[q]);
		let i = p - 1;
		for (let j = p; j < q; j++) {
			if (getProfit(A[j]) > pivot) {  // по убыванию сравниваем с pivot
			i = i + 1
			swap(A, i, j)
			}
		}
		swap(A, i + 1, q)
		//повертаємо нову позицію pivot
		return i + 1
	}

	//Основна функція
	function Quicksort(A, p, q) {
		if (p >= q) return
		//ділимо на дві частини
		let i = Partition(A, p, q)
		//окремо сортуємо першу частину
		Quicksort(A, p, i - 1)
		//окремо сортуємо другу частину
		Quicksort(A, i + 1, q)
	}

	Quicksort(webSites, 0, webSites.length - 1)
	console.log(webSites);

	//* ------------------------------------------------- 7. Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

	let websitesListLess10000 = [];
	let websitesListOver10000 = [];

	for (const site of webSites) {
		site.siteCost < 10000 ? websitesListLess10000.push(JSON.parse(JSON.stringify(site))) : websitesListOver10000.push(JSON.parse(JSON.stringify(site)));
	}
	//websitesListOver10000[0].releaseYear = 2025;
	console.log(websitesListOver10000);
}