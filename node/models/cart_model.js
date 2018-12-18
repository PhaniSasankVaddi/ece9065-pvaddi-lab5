var mongoose = require('mongoose');
var schema = mongoose.Schema;

var cartSchema = new schema({
    userId: String,
    fruitName: String,
    availability: Number,
    tax: Number,
    price: Number,
    quantity: Number,
    total: Number
})


module.exports = mongoose.model('Cart',cartSchema);