// const { readFileSync, writeFileSync } = require('fs');

// console.log('Start');
// const first = readFileSync('./Content/first.txt', 'utf8');
// const second = readFileSync('./Content/second.txt', 'utf8');

// writeFileSync(
// 	'./Content/result-sync.txt',
// 	`Here is the result: ${first}, ${second}`,
// );

// console.log('Done with task');
// console.log('Starting next task');

// =============================================
// Async

const { readFile, writeFile } = require('fs');

console.log('Start');

readFile('./Content/first.txt', 'utf8', (err, result) => {
	if (err) {
		return;
	}
	const first = result;
	readFile('./Content/second.txt', 'utf8', (err, result) => {
		if (err) {
			return;
		}
		const second = result;
		writeFile(
			'./Content/result-async.txt',
			`\nThe result: ${first}, ${second}`,
			(err, result) => {
				if (err) {
					return;
				}
				console.log("Done with task");
			},
            );
        });
    });
console.log("Starting next task");