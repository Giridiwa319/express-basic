const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('Hello Express')
})

// const userRoutes = require('./user');
const itemRoutes = require('./item');

// route.use('/users', userRoutes);
route.use('/items', itemRoutes);

module.exports = route
