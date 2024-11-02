const express = require('express');
const jwt = require('jsonwebtoken');
const tokengenerator= require('./tokenverify');

const app = express();
/*app.post('/api/verify', verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {

        if(err){
            res.sendStatus(403);
        } else {
            res.json({
                message: "Post created...",
                authData
            });
        }
    });
});*/


function verifyToken(req, res, next){

    const bearerHeader = req.headers["authorization"];

    if(typeof bearerHeader !== "undefined"){
        const bearerToken = bearerHeader.split(" ")[1];
        //req.token = bearerToken;
          jwt.verify(bearerToken, "shhhhh", (err, authData) => {

            if(err){
                res.sendStatus(403);
                
            } else {
                next();
            }
        });
        
    } else {
        
        res.sendStatus(403);
        
    }
}

module.exports = verifyToken;