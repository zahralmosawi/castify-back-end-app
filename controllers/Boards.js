const Board = require('../models/Board')

async function getAllBoards(req, res){
    try{
        console.log('getting boards...')
        const boards = await Board.find({})
        res.status(200).json(boards) 
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

async function creatNewBoard(req, res){
    try{
        console.log('creating new board...')
        const createdBoard = await Board.create(req.body)
        res.status(201).json(createdBoard)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = {getAllBoards, creatNewBoard}