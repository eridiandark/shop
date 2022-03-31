const express = require("express"),
    {Pool} = require("pg"),
    jwt = require('jsonwebtoken'),
    md5 = require("md5"),
    crypto = require("crypto"),
    bodyParser = require('body-parser'),
    dbConfig = require('./Configs/db.json');
global.app = express();
require("./modules/cors");
const pool = new Pool(dbConfig);
const accessTokenSecret = crypto.randomBytes(64).toString('hex');
const refreshTokenSecret = crypto.randomBytes(128).toString('hex');
const users = {};

app.use('/images', express.static(__dirname + "/public/images"));
app.use('/icons', express.static(__dirname + "/public/icons"));
app.use(express.json());
app.use(bodyParser.json());

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (accessTokens.findIndex(t=>t===token)!==-1) {
            jwt.verify(token, accessTokenSecret, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }

                req.user = user;
                next();
            });
        } else return res.sendStatus(403);
    } else res.sendStatus(401);
};

setInterval(()=>Object.keys(users).map(user=>{
    users[user].accessTokens = users[user].accessTokens.filter(t=>jwt.verify(t, accessTokenSecret, err=>!err));
    users[user].refreshTokens = users[user].refreshTokens.filter(t=>jwt.verify(t, refreshTokenSecret, err=>!err));
}), 2400000);

app.post('/api/login', (request, response) => {
    const {email, password} = request.body;

    console.log({email, password, body: request.body});

    pool.query(`select *
                from get_user('${email}', '${md5(password + dbConfig.salt)}')`, (err, res) => {
        console.log({err, res});
        if (res.rows.length) {
            const user = res.rows[0];
            if(!users[user.email]) users[user.email] = {accessTokens: [], refreshTokens: []};
            const accessToken = jwt.sign({email: user.email, role: user.role}, accessTokenSecret, {expiresIn: '20m'});
            users[user.email].accessTokens.push(accessToken);
            const refreshToken = jwt.sign({email: user.email, role: user.role}, refreshTokenSecret, {expiresIn: '60m'});
            users[user.email].refreshTokens.push(refreshToken);
            console.log(users);
            response.json({accessToken, refreshToken, email: user.email, role: user.role})
        } else {
            response.status(400).json({message: 'Username or password incorrect'});
        }
    });
});

app.get("/api/data", authenticateJWT, (request, response) => {
    const {role} = request.user;

    if (role === 'admin') {
        return response.json({message: "Hi admin!", user: request.user});
    } else {
        return response.json({message: "Hi client!", user: request.user});
    }
});

app.post('/api/token', (request, response) => {
    const {accessToken, refreshToken} = request.body;

    if (!refreshToken) {
        return response.sendStatus(401);
    }

    if (!refreshTokens.includes(refreshToken)) {
        return response.sendStatus(403);
    }

    jwt.verify(refreshToken, refreshTokenSecret, (err, user) => {
        if (err) return response.sendStatus(403);
        else if(users[user.email]){
            const newAccessToken = jwt.sign({email: user.email, role: user.role}, accessTokenSecret, {expiresIn: '20m'});
            const newRefreshToken = jwt.sign({email: user.email, role: user.role}, refreshTokenSecret, {expiresIn: '60m'});
            users[user.email].accessTokens = accessTokens.filter(t => t !== accessToken);
            users[user.email].refreshTokens = refreshTokens.filter(t => t !== refreshToken);

            response.json({
                accessToken: newAccessToken, refreshToken: newRefreshToken
            });
        }
    });
    return response.sendStatus(403);
});

app.post('/api/logout', (request, response) => {
    const {refreshToken} = request.body;
    jwt.verify(refreshToken, refreshTokenSecret, (err, user) => {
        if (err) {
            return response.sendStatus(403);
        }
        users[user.email] = {accessTokens: [], refreshTokens: []};
        response.json({message: "Logout successful"});
    });
    response.sendStatus(403);
});

app.get("/", (request, response) => {
    return response.json({message: "Hello!"});
});

app.listen(4000, 'localhost', () => console.log('Server listens 4000'));