const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// imitation request delay
server.use(async (req, res, next) => {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 800);
    });
    next();
});

server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')), 'UTF-8');
        const { users = [] } = db;

        const userFromDb = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromDb) {
            return res.json(userFromDb);
        }

        return res.status(403).json({ message: 'Invalid login credentials' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
});

// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'Authorization required' });
    }

    next();
});

server.use(router);

server.listen(8000, () => {
    console.log('JSON Server is running on 8000 port');
});
