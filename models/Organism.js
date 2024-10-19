
const mongoose = require('mongoose')


const OrganismSchema = new mongoose.Schema({
    commonName: { type: String, required: true },
    scientificName: { type: String, required: true },
    domain: { type: String, required: true }, 
    kingdom: { type: String, required: true },
    phylum: { type: String, required: true },
    class: { type: String, required: true },
    order: { type: String, required: true },
    family: { type: String, required: true },
    genus: { type: String, required: true },
    species: { type: String, required: true },
    subSpecies: { type: String, required: false },
    variety: { type: String, required: false },
    morph: { type: String, required: false },
    form: { type: String, required: false },
    continents: { type: [String], required: true },
    image: { type: String, require: true },
    cloudinaryId: { type: String, require: true },
    // description: { type: String, required: true},

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now}
    
    

});

    // // Distribution field
    // distribution: {
    //     countries: {
    //         type: [String], // array of strings for countries
    //         required: true
    //     },
   
    //     imageUrl: {
    //         type: String,
    //         required: false
    //     }
    // },

    // // Conservation status and general fields ** Would love for this to be a fetch to ICUN
    // // conservationStatus: {
    // //     icunCategory: {
    // //         type: String,
    // //         required: true
    // //     }
    // // },
    

    // // Automatic timestamps

// });



// Export the model
module.exports = mongoose.model('Organism', OrganismSchema);


