const { EventEmitter } = require('events');
const { Router } = require('express');
const { readFile } = require('fs');
// console.log(EventEmitter);

console.log('object');

class FindRegex extends EventEmitter {
	constructor(regex) {
		super();
		this.regex = regex;
		this.files = [];
	}
	addFile(file) {
		this.files.push(file);
		return this;
	}
	find() {
		for (const file of this.files) {
			readFile(file, 'utf8', (err, content) => {
				if (err) {
					return this.emit('error', err);
				}
				this.emit('started', file);

				this.emit('fileread', file);
				const match = content.match(this.regex);
				if (match) {
					match.forEach((elem) => this.emit('found', file, elem));
				}
			});
		}
		return this;
	}
}

const findRegexInstance = new FindRegex(/hello/i);
findRegexInstance
	.addFile('fileA.txt')
	.addFile('fileB.json')
	.find()
	.on('started', (file) => console.log(`Search on ${file} started`))

	.on('found', (file, match) =>
		console.log(`Matched "${match}" in file
${file}`),
	)
	.on('error', (err) =>
		console.error(`Error emitted ${err.message}`),
	);

// emitter.removeListener('an_event', listener)
