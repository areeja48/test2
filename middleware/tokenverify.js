const jwt = require('./tokengenerator');
const jwtLibrary = require('jsonwebtoken');
const secret = "shhhhh";

// Ignore the options for now, we'll check them later
const verifyResult = jwtLibrary.verify(jwt, secret);

console.log("verifyResult:", verifyResult);
module.exports = verifyResult;