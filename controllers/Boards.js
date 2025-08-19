const Board = require('../models/Board')

async function creatNewBoard(req, res){
    try{
        const {name, description, isPublic, tags, podcasts } = req.body;
        const userId = req.user.id;

        const newBoard = await Board.create({
            name, description, isPublic, tags, podcasts, createdBy: userId
        });

        res.status(201).json(newBoard);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

async function getAllBoards(req, res){
    try{
        console.log('getting boards...')
        const boards = await Board.find({})
        res.status(200).json(boards) 
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

async function getSingleBoard(req, res){
    try{
        console.log('getting board ...')
        const board = await Board.findById(req.params.id)
        if(!board){
            return res.status(404).json({error: 'Board Not Found'})
        }else{
            res.status(200).json(board)
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

async function editBoard(req, res){
    try{
        console.log('editing the board')
        const editedBoard = await Board.findByIdAndUpdate(req.params.boardId, req.body, {new: true})
        if(!editedBoard){
            return res.status(404).json({error: 'Board Not Found'})
        }else{
            res.status(201).json(editedBoard)
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

async function deleteBoard(req, res){
    try{
        console.log('deleting board...')
        const deletedBoard =  await Board.findByIdAndDelete(req.params.boardId)
        if(!deletedBoard){
            return res.status(404).json({error: 'Board Not Found'})
        }else{
            res.status(200).json(deletedBoard)
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}


module.exports = {creatNewBoard, getAllBoards, getSingleBoard, editBoard, deleteBoard}