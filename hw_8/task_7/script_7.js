"use strict"
// * Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// 1)	за весь рік;
// 2)	у першій половині року;
// 3)	у другій половині року;
// 4)	за літо;
// 5)	за ІІ квартал;
// 6)	за парні місяці (з парними номерами);
// 7)	за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

if (confirm('Почати тестування?')) {
	// Так решил задачу я
	const paymentYearValues = [1, 2, 5, 2, 1, 5, 1, 2, 5, 2, 1, 5];

	// // 1. сумарна кількість грошей за за весь рік;
	// function totalYearPayment(param) {
	// 	let sum = 0;
	// 	for (let i = 0; i < param.length; i++) {
	// 		sum += param[i];
	// 	}
	// 	return sum;
	// }
	// document.write(`<p style = "margin-top: 5px;">1. сумарна кількість грошей за за весь рік: ${totalYearPayment(paymentYearValues)}</p>`);

	// // 2. сумарна кількість грошей у першій половині року;
	// let firstHalfYearPaymentsValue = (arr) => {
	// 	let sum = 0;
	// 	for (let i = 0; i <= 5; i++) {
	// 		sum += arr[i];
	// 	}
	// 	return sum;
	// }
	// document.write(`<p style = "margin-top: 5px;">2. сумарна кількість грошей у першій половині року: ${firstHalfYearPaymentsValue(paymentYearValues)}</p>`);

	// // 3. сумарна кількість грошей у другій половині року;
	// let secondHalfYearPaymentsValue = (arr) => {
	// 	let sum = 0;
	// 	for (let i = 6; i <= 11; i++) {
	// 		sum += arr[i];
	// 	}
	// 	return sum;
	// }
	// document.write(`<p style = "margin-top: 5px;">3. сумарна кількість грошей у другій половині року: ${secondHalfYearPaymentsValue(paymentYearValues)}</p>`);

	// // 4. сумарна кількість грошей за літо;
	// let summerPaymentsValue = (arr) => {
	// 	let sum = 0;
	// 	for (let i = 5; i <= 7; i++) {
	// 		sum += arr[i];
	// 	}
	// 	return sum;
	// }
	// document.write(`<p style = "margin-top: 5px;">4. сумарна кількість грошей за літо: ${summerPaymentsValue(paymentYearValues)}</p>`);

	// // 5. сумарна кількість грошей за ІІ квартал;
	// let secondQuarterYearPaymentsValue = (arr) => {
	// 	let sum = 0;
	// 	for (let i = 3; i <= 5; i++) {
	// 		sum += arr[i];
	// 	}
	// 	return sum;
	// }
	// document.write(`<p style = "margin-top: 5px;">5. сумарна кількість грошей за ІІ квартал: ${secondQuarterYearPaymentsValue(paymentYearValues)}</p>`);

	// // 6. сумарна кількість грошей за парні місяці (з парними номерами);
	// let evenMonthYearPaymentsValue = (arr) => {
	// 	let sum = 0;
	// 	for (let i = 1; i <= arr.length; i+=2) {
	// 		sum += arr[i];
	// 	}
	// 	return sum;
	// }
	// document.write(`<p style = "margin-top: 5px;">6. сумарна кількість грошей за парні місяці (з парними номерами): ${evenMonthYearPaymentsValue(paymentYearValues)}</p>`);
	
	// // 7. сумарна кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
	// let startSeasonYearPaymentsValue = (arr) => {
	// 	let sum = 0;
	// 	for (let i = 2; i <= arr.length; i+=3) {
	// 		sum += arr[i];
	// 	}
	// 	return sum;
	// }
	// document.write(`<p style = "margin-top: 5px;">7. сумарна кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима): ${startSeasonYearPaymentsValue(paymentYearValues)}</p>`);

	// Так я ее решил с рекомендацией учителя - создать общую функцию куда будут передоваться начальный и конечный индекс
	// Общая функция в которую передается начальный и конечный индекс
	function generalFunc(arr, startIndex, endIndex, step = 1) {
		let sum = 0;
		for (let i = startIndex; i < endIndex; i++) {
			sum += arr[i];
		}
		return sum;
	}

	// 1. сумарна кількість грошей за за весь рік;
	document.write(`<p style = "margin-top: 5px;">1. сумарна кількість грошей за за весь рік: ${generalFunc(paymentYearValues, 0, paymentYearValues.length)}</p>`);

	// 2. сумарна кількість грошей у першій половині року;
	document.write(`<p style = "margin-top: 5px;">2. сумарна кількість грошей у першій половині року: ${generalFunc(paymentYearValues, 0, 6)}</p>`);

	// 3. сумарна кількість грошей у другій половині року;
	document.write(`<p style = "margin-top: 5px;">3. сумарна кількість грошей у другій половині року: ${generalFunc(paymentYearValues, 6, paymentYearValues.length)}</p>`);

	// 4. сумарна кількість грошей за літо;
	document.write(`<p style = "margin-top: 5px;">4. сумарна кількість грошей за літо: ${generalFunc(paymentYearValues, 5, 8)}</p>`);

	// 5. сумарна кількість грошей за ІІ квартал;
	document.write(`<p style = "margin-top: 5px;">5. сумарна кількість грошей за ІІ квартал: ${generalFunc(paymentYearValues, 3, 6)}</p>`);

	// 6. сумарна кількість грошей за парні місяці (з парними номерами);
	document.write(`<p style = "margin-top: 5px;">6. сумарна кількість грошей за парні місяці (з парними номерами): ${generalFunc(paymentYearValues, 1, paymentYearValues.length, 2)}</p>`);
	
	// 7. сумарна кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
	document.write(`<p style = "margin-top: 5px;">7. сумарна кількість грошей за місяці, які є початковими у сезоні (весна, літо, осінь, зима): ${generalFunc(paymentYearValues, 2, paymentYearValues.length, 3)}</p>`);
}
