let net = require("net");
let server = net.createServer(socket => {
	socket.on("data", data => {
		let html = "<h1>123</h1>";

		socket.write(`HTTP/1.1 200 OK\r\nServer: kek\r\nContent-Type: text/html\r\nContent-Length: ${html.length}\r\n\r\n${html}`);
	})
});

server.listen(80, "127.0.0.1");