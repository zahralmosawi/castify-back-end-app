const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

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

        req.user = decoded;
        next();
    });
}