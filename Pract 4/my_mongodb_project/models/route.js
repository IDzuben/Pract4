const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    startLocation: String,
    endLocation: String,
    distance: Number,
    duration: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Route', routeSchema);
