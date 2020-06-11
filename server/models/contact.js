let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: String,
    contactEmail: String
},
{
    collection: 'contacts'
});

module.exports = mongoose.model('contact', contactSchema);