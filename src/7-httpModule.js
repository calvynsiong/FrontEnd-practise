const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Welcome to our home');
	}
	if (req.url === '/about') {
		res.write('Here is our history');
	}
	res.write(
		`<h1>Page not Found</h1>
    <p>Cannot find the page you are looking for</p>
    <a href="/">Back Home</a>`,
	);
});

server.listen(5000);
