var express = require('express');
var router = express.Router();
var user_controller = require( '../controllers/users.js' );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send( JSON.stringify( { title: 'Express' } ) );
});

/* GET users listing. */
router.get('/user', function(req, res, next) {
  user_controller.getAll( req, res, next );
});

/* GET user by id */
router.get( '/user/:id', function( req, res, next) { 
  user_controller.get( req[ 'params' ][ 'id' ], req, res, next );
});

module.exports = router;
