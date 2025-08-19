const router = require('express').Router()
const boardController = require('../controllers/Boards')
const secureRoute = require('../middleware/secureRoute')

router.post('/new', secureRoute, boardController.creatNewBoard); 
router.get('/', boardController.getAllBoards)
router.get('/:id', boardController.getSingleBoard)
router.put('/:boardId', boardController.editBoard)
router.delete('/:boardId', boardController.deleteBoard)

module.exports = router