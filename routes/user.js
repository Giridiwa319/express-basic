const userRoutes = require('express').Router();

  userRoutes.get('/', (req, res) => {
    res.send('User Page')
})

module.exports = userRoutes
