const express = require('express');
const router = express.Router();
const calculator = require('../controller/div1');

const app = express();


router.get('/', (req, res) => {
     console.log(req.body);
const {numb1 , numb2, numb3} = req.body;   // getting values form postman body as json object
     res.send(`Division of ${numb1}, ${numb2} and ${numb3} is `+ calculator.div(numb1, numb2, numb3))});


router.post('/', (req, res) => {
     console.log(req.body);
     
     const {numb1 , numb2, numb3} = req.body;   // getting values form postman body as json object
     res.send(`Division of ${numb1}, ${numb2} and ${numb3} is `+ calculator.div(numb1, numb2, numb3))
});
     
router.put('/', (req, res) => {
     console.log(req.body);
     
     const {numb1 , numb2, numb3} = req.body;   // getting values form postman body as json object
     res.send(`Division of ${numb1}, ${numb2} and ${numb3} is `+ calculator.div(numb1, numb2, numb3))
});

router.delete('/', (req, res) => {
     console.log(req.body);
     
const {numb1 , numb2, numb3} = req.body;   // getting values form postman body as json object
     res.send(`Division of ${numb1}, ${numb2} and ${numb3} is `+ calculator.div(numb1, numb2, numb3))});

module.exports = router;
