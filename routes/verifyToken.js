const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified =  jwt.verify(token, process.env.TOKEN_SECRET);
        // It returns the payload {
                //   "_id": "5fe2bd3a27c57b27830c4548",
                //   "iat": 1608697626}, then assign it to req, then we can have access to it later
        req.user = verified;  // 'user' can be anything, it's randomly assigned 
        next();
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
}

module.exports = auth;