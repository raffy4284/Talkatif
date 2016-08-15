var db = require( '../db.js' );
var date = require( '../helpers/date.js' );

exports.create = function( input, request, response, next, callback ) {
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

exports.put = function( id, input, request, response, next, callback ) { 
  var sql_query = 'UPDATE users SET ';
  for( var key in input ) { 
    if( input[ key ] !== undefined ) {
      sql_query += key + ' = ' + input[ key ] + ', ';
    } else {  // null out value and let mysql handle not nullable values (or maybe I can catch it? )!. 
      sql_query += key + ' = NULL, ';
    }
  }
  // remove last comma
  sql_query = sql_query.slice( 0, -1 ); 
  db.get().query( sql_query, [], function( err, result ) { 
    if( err ) next( result );
    callback( request, response, result );
  }); 
};

exports.patch = function( id, input, request, response, next, callback ) { 
  db.get().query(
    'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, user_level = ? WHERE id = ?',
    [
      input[ 'first_name'], 
      input[ 'last_name' ], 
      input[ 'email' ],
      input[ 'password' ], 
      input[ 'user_level' ],
      id
    ], 
    function( err, result ) { 
      if( err ) next( result );
      callback( request, response, result );
    }
  ); 
};

exports.delete = function( id, request, response, next, callback ) { 
  db.get().query( 
    'DELETE users WHERE id = ? ',
    id, 
    function( err, result ) { 
      if( err ) next( err );
      callback( request, response, result );
    }
  );
};
