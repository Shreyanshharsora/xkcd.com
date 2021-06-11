var express = require('express');
var router = express.Router();
const axios = require('axios');
const {
  resource
} = require('../app');

var num;


// Get latest  Comic
var data = function () {
  return new Promise(function (resolve, reject) {
    axios.get('http://xkcd.com/info.0.json')
      .then((response) => resolve(response.data))
      .catch(() => reject("No Data Found"));
  });
}


// Get particular  Comic by id
var dataByComicId = function (id) {
  return new Promise(function (resolve, reject) {
    axios.get('https://xkcd.com/' + id + '/info.0.json')
      .then((response) => resolve(response.data))
      .catch(() => reject({
        message: "No Data Found"
      }));
  });
}


// index route response 
router.get('/', function (req, res, next) {
  data(req.params.id).then((dt) => {
      let y = dt.transcript.replace(/[^a-zA-Z ]/g, "");
      dt.transcript = y;
      res.render('index', {
        data: dt
      });
    })
    .catch(() => res.render({
      message: "No Data Found"
    }));

});


// index route response with id 
router.get('/:id', function (req, res, next) {
  dataByComicId(req.params.id).then((dt) => {
      let y = dt.transcript.replace(/[^a-zA-Z ]/g, "");
      dt.transcript = y;
      res.render('index', {
        data: dt
      });
      num = dt.num;
    })
    .catch(() => res.render('index', {
      message: "No Data Found"
    }));
});

module.exports = router;