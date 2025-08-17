const router = require('express').Router()
const boardController = require('../controllers/Boards')

router.post('/new', boardController.creatNewBoard)
router.get('/', boardController.getAllBoards)
router.get('/:id', boardController.getSingleBoard)
router.put('/:boardId', boardController.editBoard)
router.delete('/:boardId', boardController.deleteBoard)

module.exports = router