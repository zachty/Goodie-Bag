const router = require('express').Router();
const { Candy } = require('../db');

router.get('/', async (req, res, next) => {
    try {
        const data = await Candy.findAll();
        res.send(data);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
