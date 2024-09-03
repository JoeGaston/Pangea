const mongoose = require('mongoose') //need to require for use

const ItemSchema = new mongoose.Schema({ // defines a structure for all info going into our database
 name : { // this is the field 
    type: String, // declares the type
    required: true, // ensures its given
 },
 quantity : {
    type: Number,
    required: true,
 }
})

module.exports = mongoose.model('Item', ItemSchema) //module - specific thing we are exporting, model is specific structure we are sending to MongoDB. 'Item' is the name of the collection, and ItemSchema is the schema used.