"use strict"
// * Задача 3. Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval)
// * програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. 
// * Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

if (confirm('Почати тестування?')) {
	class Notifier {
		static myNotifier;
		static notiferCounter = 0;
		constructor(interval) {
			if (Notifier.myNotifier) {
				return Notifier.myNotifier;
			}

			this.interval = interval * 1000;
			this.message = 'це просто текст';
			this.notifer = null; // запускался таймер или нет

			Notifier.myNotifier = this;
		}
		runMyNotifier(count){
			if (this.notifer) return;
	
			this.notifer = setInterval(() => {
				Notifier.notiferCounter++;
				console.log(`Повідомлення #${Notifier.notiferCounter}: ${this.message}`);
				if(Notifier.notiferCounter === count) this.stopMyNotifier()
			}, this.interval);
		}
		// * --- Метод зупинки таймера ---
		stopMyNotifier() {
			clearInterval(this.notifer);
			this.notifer = null;
			console.log('Зупинка таймера');
		}
		// * --- Метод зміни повідомлення без зупинки таймера ---
		changeMyMessage(newMessage) {
			this.message = newMessage;
		}
	}

	//let newNotifer = new Notifier(2);
	new Notifier(2).runMyNotifier(5);
}