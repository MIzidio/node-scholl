const requestHandle = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Welcome User</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Enviar</button></form><body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const username = parsedBody.split('=')[1];
            console.log(username);
            rses.statusCode = 302;
            res.setHeader('Location', '/users');
            return res.end();
        });
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users list</title></head>');
        res.write('<body><nav><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></nav><body>');
        res.write('</html>');
        return res.end();
    }

};

module.exports = requestHandle;