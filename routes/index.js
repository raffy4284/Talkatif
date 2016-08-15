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

/* POST new user */
router.post( '/user', function( req, res, next ) { 
  
});

/* GET user by id */
router.get( '/user/:id', function( req, res, next) { 
  user_controller.get( req[ 'params' ][ 'id' ], req, res, next );
});

/* PUT user by id */
router.put( '/user/:id', function( req, res, next ) { 
  user_controller.put( req[ 'params' ][ 'id' ], req, res, next );
});

/* PATCH user by id */
router.patch( '/user/:id', function( req, res, next ) {
  user_controller.patch( req[ 'params' ][ 'id' ], req, res, next );
});

/* DELETE user by id */
router.delete( '/user/:id', function( req, res, next ) { 
  user_controller.delete( req[ 'params' ][ 'id' ], req, res, next );
});

module.exports = router;
