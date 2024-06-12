const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    driver: { type: Schema.Types.ObjectId, ref: 'Driver' },
    car: { type: Schema.Types.ObjectId, ref: 'Car' },
    status: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
