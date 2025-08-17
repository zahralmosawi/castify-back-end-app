const jwt = require('jsonwebtoken');
const SECRET = 'n7!Yp2$Wq@LzR8^m3#KvX9*Fb6%HtG4&';

module.exports = function secureRoute(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET, (error, decoded) => {
        if (error) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        res.user = decoded;
        next();
    });
}