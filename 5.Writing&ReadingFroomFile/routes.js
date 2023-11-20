const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile('./message.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);

                res.write('<html>');
                res.write('<head><title>Enter Message</title></head>');
                res.write('<body>')
                res.write(`<div><p>${data}</p></div>`);
                res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button>');
                res.write('</body>');
                res.write('</html>');
                return res.end();
            }
        })

    }
    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}

//different ways we can export 

//1st method
// module.exports = requestHandler;

//2nd method
// module.exports = {
//     handler : requestHandler,
//     hardText: "Some hard coded text"
// };

//3rd method
// module.exports.handler = requestHandler;
// module.exports.hardText = "Some hard coded text";

//4th method
exports.handler = requestHandler;
exports.hardText = "Some hard coded text";