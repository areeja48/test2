const express = require('express');
const router = express.Router();
const addRouter = require('./add');
const divideRouter= require('./divide');
const multiplyRouter = require('./multiply');
const subtractRouter = require('./subtract');
const authMiddleware = require('../middleware/tokenVeri')




router.use('/add', authMiddleware, addRouter);
router.use('/divide', authMiddleware,  divideRouter);
router.use('/multiply', authMiddleware, multiplyRouter);
router.use('/subtract', authMiddleware, subtractRouter);
     
module.exports = router;
