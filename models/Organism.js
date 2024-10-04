const mongoose = require('mongoose')

const OrganismSchema = new mongoose.Schema({
    // name fields
    name: {
        commonName: {
            type: String,
            required: true,
        },
        scientificName: {
            type: String,
            required: true
        }
    },
    

    // taxonomy
    taxonomy: {
        domain: { 
            type: String, 
            required: true,
        }, 
        kingdom: { 
            type: String, 
            required: true,
        },
        phylum: { 
            type: String, 
            required: true,
        },
        class: { 
            type: String, 
            required: true,
        },
        order: { 
            type: String, 
            required: true,
        },
        family: { 
            type: String, 
            required: true,
        },
        genus: { 
            type: String, 
            required: true,
        },
        species: { 
            type: String, 
            required: true,
        },
        subSpecies: { 
            type: String, 
            required: false,
        },
        variety: { 
            type: String, 
            required: false,
        },
        morph: { 
            type: String, 
            required: false,
        },
        form: { 
            type: String, 
            required: false,
        },
        // isDomesticated: {
        //     type: Boolean,
        //     default: false,
        //     required: true,
        // }
    },
    

    // Distribution field
    distribution: {
        countries: {
            type: [String], // array of strings for countries
            required: true
        },
        continents: {
            type: [String], // array of strings for continents
            required: true
        }
    },
    
    // Additional information
    additionalInfo: {
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: false
        }
    },

    // Conservation status and general fields ** Would love for this to be a fetch to ICUN
    conservationStatus: {
        icunCategory: {
            type: String,
            required: true
        }
    },
    

    // Automatic timestamps
    createdAt: {
        type: Date,
        default: Date.now  // Automatically sets the date when the record is created
    },
    updatedAt: {
        type: Date,
        default: Date.now  // Automatically sets the date when the record is updated
    }
});



// Export the model
module.exports = mongoose.model('Organism', OrganismsSchema);


