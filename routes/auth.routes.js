const router = require('express').Router();
const authController = require('../controllers/Auth');
const multer = require('multer');
const { avatarStorage } = require('../config/cloudinary');
const secureRoute = require('../middleware/secureRoute');
const upload = multer({ storage: avatarStorage });

router.post('/signup', upload.single('avatar'), authController.register);
router.post('/login', authController.login);
router.post('/changePassword', secureRoute, authController.changePassword)

module.exports = router;