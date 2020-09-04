const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text:{
        type: String,
        trim: true,
        required:[true, 'Add some text it is req field']
    },
    amount:{
        type: Number,
        required: [true, 'Enter amount -ve Or +ve it is req field']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
}) ;

module.exports = mongoose.model('Transaction', TransactionSchema);