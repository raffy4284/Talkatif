var db = require( '../db.js' );
var date = require( '../helpers/date.js' );
exports.create = function( input, next, callback ) {
  var values = [ 
    input[ 'first_name' ],
    input[ 'last_name' ],
    input[ 'email' ],
    input[ 'password' ],
    input[ ' user_level' ],
    date.getCurrentDateTime(),
    date.getCurrentDateTime() 
  ];
  
  db.get().query( 'INSERT INTO users ( first_name, last_name, email, password, user_level, modified_date, created_date ) VALUES( ?, ?, ?, ?, ?, ?, ? )', values, function ( err, result ) { 
    if( err ) return next( err );
    callback( request, response, { 
      'first_name' : input[ 'first_name' ],
      'last_name' : input[ 'last_name' ],
      'email' : input[ 'email' ]
    });
  });
}

exports.get = function( id, request, response, next, callback ) { 
  db.get().query( 'SELECT * FROM users where id = ?', id, function( err, result ) { 
    if( err ) return next( err );
    callback( request, response, result );
  }); 
};

exports.getAll = function( request, response, next, callback ) { 
  db.get().query( 'SELECT * FROM users', {}, function( err, result ) { 
    if( err ) return next( err );
    callback( request, response, result );
  });
}; 
