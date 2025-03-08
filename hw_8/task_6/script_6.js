"use strict"
// * Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).*

if (confirm('Почати тестування?')) {
	const itemsPrice = [1000, 20, 31];
	const itemsTitle = ['cheese', 'juice', 'bread'];

	let userMoney = parseInt(prompt('Введите какое у Вас есть количество денег'));

	function userCart(money, price, title) {
		let result = [];
		for (let i = 0; i < price.length; i++) {
			if (money >= price[i]) {
				result.push(title[i])
			}
		}
		if (result.length === 0) {
			result = 'Вы ничего не можете купить!'
		}
		return result;
	}
	document.write(`<p style = "margin-top: 5px;">На Ваши деньги Вы можете купить что-то из этих товаров: ${userCart(userMoney, itemsPrice, itemsTitle)}</p>`)
}
