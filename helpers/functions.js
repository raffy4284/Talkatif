var jsonify = JSON.stringify;
exports.callback = function( request, response, response_parameters ) { 
  response.send( jsonify( response_parameters ) );
};
