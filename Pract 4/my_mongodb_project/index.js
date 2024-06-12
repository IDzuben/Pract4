const mongoose = require('mongoose');
const Car = require('./models/car');
const Customer = require('./models/customer');
const Driver = require('./models/driver');
const Order = require('./models/order');
const Route = require('./models/route');

mongoose.connect('mongodb://localhost:27017/my_mongodb_project', { useNewUrlParser: true, useUnifiedTopology: true });

// Створення нової машини
async function createCar() {
    const car = new Car({
        model: 'Toyota Prius',
        licensePlate: 'ABC123',
        year: 2020
    });
    await car.save();
    console.log('Car created:', car);
}

// Читання інформації про машину
async function readCar(carId) {
    const car = await Car.findById(carId);
    console.log('Car found:', car);
}

// Оновлення інформації про машину
async function updateCar(carId) {
    const car = await Car.findByIdAndUpdate(carId, { model: 'Honda Civic' }, { new: true });
    console.log('Car updated:', car);
}

// Видалення машини
async function deleteCar(carId) {
    await Car.findByIdAndDelete(carId);
    console.log('Car deleted');
}

// Виклик CRUD операцій
async function run() {
    await createCar();
    const car = await Car.findOne({ licensePlate: 'ABC123' });
    await readCar(car._id);
    await updateCar(car._id);
    await deleteCar(car._id);
}

run().catch(err => console.log(err));
