let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: String
},
{
    collection: 'contacts'
});

debugger;
module.exports = mongoose.model('contact', contactSchema);