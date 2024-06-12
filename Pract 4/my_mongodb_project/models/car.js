const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    model: String,
    licensePlate: String,
    year: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Car', carSchema);
