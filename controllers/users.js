var User = require( '../models/User.js' );
var helper_function = require( '../helpers/functions.js' );
var jsonify = JSON.stringify;

function handle_put_or_patch( id, request, response, next, callback, action ) { 
  if( id === undefined ) { 
    var err = new Error( 'page not found' );
    err.status = 404;
    next( err );
  }
  var body = request[ 'body' ];
  var input_params = { 
    first_name : body[ 'first_name' ], 
    last_name : body[ 'last_name' ],
    email : body[ 'email' ],
    password : body[ 'password' ],
    user_level : body[ 'user_level' ]
  };
  action( id, input_params, request, response, next, callback );
}

exports.getAll = function( request, response, next ) { 
  User.getAll( request, response, next, helper_function.callback );   
};
exports.post = function( request, response, next ) {
  var body = request[ 'body' ];
  var err;
  var required_params = [ 'first_name', 'last_name', 'password' ];
  var api_status_err = {
    'first_name' : 1,
    'last_name' : 2,
    'password' : 3
  };
  // catch missing required params
  for( int i = 0; i < required_params.length; i++ ) { 
    if( body[ required_params[ i ] ] === undefined ) { 
      err = new Error( required_params[ i ] + ' parameter is required' );
      err.status = 400;
      err.api_status = api_status_err[ required_params[ i ] ];
      next( err );
    }
  }
  var input_params = { 
    first_name : body[ 'first_name' ], 
    last_name : body[ 'last_name' ],
    email : body[ 'email' ],
    password : body[ 'password' ],
    user_level : body[ 'user_level' ]
  };
  User.create( input_params, request, response, next, helper_function.callback ); 
};

exports.get = function( id, request, response, next ) { 
  User.get( id, request, response, next, helper_function.callback );
};

exports.put = function( id, request, response, next ) { 
  handle_put_or_patch( id, request, response, next, helper_function.callback, User.put );
};

exports.patch = function( id, request, response, next ) { 
  handle_put_or_patch( id, request, response, next, helper_function.callback, User.patch );
};

exports.delete = function( id, request, response, next ) { 
  if( id === undefined ) { 
    var err = new Error( 'page not found' );
    err.status = 404;
    next( err );
  }
  User.delete( id, request, response, next, helper_function.callback ); 
};
