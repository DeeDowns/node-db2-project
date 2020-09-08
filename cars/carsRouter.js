const express = require('express')

const db = require('../data/connection.js')

const router = express.Router()


router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        console.log(cars)
        res.status(200).json({ data: cars})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    db('cars')
    .where({ id: id })
    .then(car => {
        console.log(car)
        res.status(200).json({ data: car})

    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})

router.post('/', (req, res) => {
    const newCar = req.body
    db('cars')
    .insert(newCar)
    .returning('id')
    .then(ids => {
        console.log(ids)
        res.status(201).json({ data: ids })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})

router.put('/:id', (req, res) => {
    const changes = req.body
    const { id } = req.params

    db('cars')
    .where({ id: id })
    .update(changes)
    .then(count => {
        console.log(count)
        res.status(200).json({ message: 'car updated' })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    db('cars')
    .where({ id: id }) 
    .del()
    .then(count => {
        console.log(count)
        if(count) {
            res.status(200).json({ message: 'car removed' })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})



module.exports = router