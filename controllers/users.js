var User = require( '../models/User.js' );
var helper_function = require( '../helpers/functions.js' );
var jsonify = JSON.stringify;

exports.get = function( id, request, response, next ) { 
  User.get( id, request, response, next, helper_function.callback );
};
exports.getAll = function( request, response, next ) { 
  User.getAll( request, response, next, helper_function.callback );   
};
exports.create = function( request, response, next ) {
  var input_params = { 
    first_name : "Test", 
    last_name : "User",
    email : "raffy42842@berkeeeley.edu",
    password : "Matteramart1",
    user_level : 2
  };
  User.create( input_params, next, helper_function.callback ); 
}
