// Write a function that accepts a number and a callback as the
// arguments. The function will return an EventEmitter that emits an event
// called tick every 50 milliseconds  until the number of milliseconds is passed
// from the invocation of the function. The function will also call the callback
// when the number of milliseconds has passed, providing, as the result, the total
// count of tick events emitted. Hint: you can use setTimeout() to schedule
// another setTimeout() recursively.

const { EventEmitter } = require('events');

const ticker = (cb, number) => {
	let count = 0;

	if (count < number || !number) {
		const Emitter = new EventEmitter();
		Emitter.emit(
			'tick',
			setTimeout(function boo() {
				console.log('Event');
				count++;
				if (count > number) return cb;

				setTimeout(boo, 1000);
			}, 1000),
		);
	}
};

const cb = () => {
	console.log('Hello');
};

ticker(cb, 2);
