const router = require('express').Router()
const boardController = require('../controllers/Boards')

router.get('/', boardController.getAllBoards)
router.get('/:id', boardController.getSingleBoard)
router.post('/new', boardController.creatNewBoard)

module.exports = router