const express = require('express') // always need to require express in any file it will be used
const router = express.Router() //? reate a new router object in your program to handle requests. 
const Item = require('../models/Item') // something to do with mongoose schema?



//Controller 1: Create / log a new species for the database
router.post('/create', async (req, res) =>{ //create a new router object in your program to handle requests. 
    try{
        const {name, quantity} = req.body //? this is destructuring. extracting the data out of the request body that is attri. to name, quantity
        const newItem = new Item({name, quantity}) // this is passing it through the filter to check info against schema
        await newItem.save() // wait for item to be saved to the database
        res.status(201).json({new_item: newItem,}) // responds w/ successful and the info that was passed to the DB
    }
    catch(err) {
        res.status(500).json({ message: 'Failed to create item', error: err.message})
    }
})



//Controller 2: Get item
router.get('/get', async (req, res) =>{ //create a new router object in your program to handle requests. 
    try {
        const items = await Item.find()
        res.status(200).json(items)
    }

    catch {
        res.status(500).json({ message: 'Failed to get item', error: err.message})
    }

})


//Controller 3: put item
router.put('/update', async (req, res) =>{ //create a new router object in your program to handle requests. 
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.body.id, req.body, {new: true, runValidators: true,});
        if (!updatedItem) {
            return res.status(404).json({message: 'item not found!'})
        }
        res.status(200).json(updatedItem) // returns a json object if needed to be used somewhere else.
    }

    catch {
        res.status(500).json({ message: 'Failed to update item', error: err.message})
    }

})


//Controller 4: delete item
router.delete('/delete', async (req, res) =>{ //create a new router object in your program to handle requests. 
    try {
        const deletedItem = await Item.findByIdAndDelete(req.body.id)
        if (!deletedItem) {
            return res.status(404).json({message: 'item not found!'})
        }
        res.status(200).json(deletedItem) // returns a json object if needed to be used somewhere else.
    }

    catch {
        res.status(500).json({ message: 'Failed to delete item', error: err.message})
    }

})

module.exports = router // this allows code to leave this file?