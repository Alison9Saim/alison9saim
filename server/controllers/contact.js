let express = require('express');
let router = express.Router();

//create a reference to the DB Schema
let contactModel = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    contactModel.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);
            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
        }
    });
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contactModel.remove({_id:id}, (err) => {
        if(err){
            console.log(err);
            res.end(err)
        }
        else{
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
}