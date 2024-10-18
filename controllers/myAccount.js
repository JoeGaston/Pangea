const express = require ("express")
const Organism = require("../models/Organism")


module.exports = {
    welcome: (req, res) => {
        res.render('myAccount.ejs',{
            // loggedIn: true,
            username: req.user.userName,
            role: req.user.role
        })
        console.log(req.user)
    },

    admin: (req, res) => {
        res.render('admin.ejs',{
            // loggedIn: true,
            // username: req.user.userName,
            // role: req.user.role
        })
        console.log(req.user)
    },

    addOrganism: async (req, res) => {
        // const name = req.body.commonName // this works
        // console.log(name + 'bird')
         try {
            const organism = new Organism({
                commonName: req.body.commonName,
                scientificName: req.body.scientificName,
                domain: req.body.domain,
                kingdom: req.body.kingdom,
                phylum: req.body.phylum,
                class: req.body.class,
                order: req.body.order,
                family: req.body.family,
                genus: req.body.genus,
                species: req.body.species,
                subSpecies: req.body.subSpecies,
                variety: req.body.variety,
                morph: req.body.morph,
                form: req.body.form,
                continents: req.body.continents,
                // description: res.body.description,

                });
        
            await organism.save();
        
                // Redirect to a success page or another route after saving
                res.redirect('/myaccount/admin'); // Example redirect
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while adding the organism.' });
                }
    }   
}

