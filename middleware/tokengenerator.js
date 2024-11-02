const jwtLibrary = require('jsonwebtoken');

// The only arguments we need are a secret value and some JSON
const json = {  
    "id": "1",
    "username": "Ali",
    "email": "ali1234@gmail.com"
}
const secret = "shhhhh";

// Ignore the options for now, we'll check them later
const jwt = jwtLibrary.sign(json, secret, {expiresIn: '1h'});

console.log("JWT Token:", jwt);
module.exports = jwt;