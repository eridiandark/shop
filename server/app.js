const express = require("express"),
    { Pool, Client } = require("pg"),
    jwt = require('jsonwebtoken'),
    users = require('./users');
global.app = express();
require("./modules/cors");

const dbConfig = require('./Configs/db.json');
const pool = new Pool(dbConfig);

app.use('/images', express.static(__dirname + "/public/images"));

app.use('/icons', express.static(__dirname + "/public/icons"));

const tokenKey = '1a2b-3c4d-5e6f-7g8h'

app.use(express.json())
app.use((req, res, next) => {
    if (req.headers.authorization) {
        jwt.verify(
            req.headers.authorization.split(' ')[1],
            tokenKey,
            (err, payload) => {
                if (err) next()
                else if (payload) {
                    for (let user of users) {
                        if (user.id === payload.id) {
                            req.user = user
                            next()
                        }
                    }

                    if (!req.user) next()
                }
            }
        )
    }

    next()
})

app.post('/api/auth', (req, res) => {
    for (let user of users) {
        if (
            req.body.login === user.login &&
            req.body.password === user.password
        ) {
            return res.status(200).json({
                id: user.id,
                login: user.login,
                token: jwt.sign({ id: user.id }, tokenKey),
            })
        }
    }

    return res.status(404).json({ message: 'User not found' })
})

app.get('/user', (req, res) => {
    if (req.user) return res.status(200).json(req.user)
    else
        return res
            .status(401)
            .json({ message: 'Not authorized' })
})



app.get("/", function(request, response){
    response.json({data: `<h2>Привет Express! ${new Date()}</h2>`});
});

app.listen(4000, 'localhost', ()=>console.log('Server listens 4000'));