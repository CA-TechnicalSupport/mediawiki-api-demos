// This file is autogenerated. See modules.json and autogenerator.py for details

/*
    tokens.js

    MediaWiki API Demos
    Demo of `Token` module: Fetch token of type `csrf`

    MIT License
*/

var params = {
		action: 'query',
		meta: 'tokens',
		type: 'csrf',
		format: 'json'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	console.log( data.query.tokens.csrftoken );
} );
