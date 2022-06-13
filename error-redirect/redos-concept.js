/**
 * data to test: aaa, aabbaa
 * data to exploit:  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!
 */

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

const re = /^(a+)+$/;

function reDosConcept() {
	readline.question('Enter your data to verify?', (data) => {
		console.log(`data: ${data}`);
		readline.close();
		const results = data.match(re);
		console.log(JSON.stringify(results));
	});
}

reDosConcept();
