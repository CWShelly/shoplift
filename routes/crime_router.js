const Router = require('express').Router;
const Crime = require(__dirname + '/../models/crime');
const bpj = require('body-parser').json();
const eH = require(__dirname + '/../lib/error_handler');
var crimeRouter = module.exports = Router();

crimeRouter.post('/crime', bpj, (req, res) => {
  var newCrime = new Crime(req.body);
  newCrime.save((err, data) => {
    if (err) return eH(err, res);
    res.status(200).json(data);
    // res.status(200).json({ msg: 'wow post' });
    console.log('posted');
  });
});

crimeRouter.get('/crime', (req, res) => {
  Crime.find(null, (err, data) => {
    if (err) return eH(err, res);
    res.status(200).json(data);

  });
});
