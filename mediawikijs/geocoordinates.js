// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	geocoordinates.js

	MediaWiki API Demos
	Demo of `Geosearch` module: Obtain coordinates for wiki pages nearby

	MIT License
*/

var params = {
		action: 'query',
		prop: 'coordinates',
		titles: 'Wikimedia Foundation',
		format: 'json'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	var pages = data.query.pages,
		page;
	for ( page in pages ) {
		console.log( 'Latitute: ' + pages[ page ].coordinates[ 0 ].lat );
		console.log( 'Longitude: ' + pages[ page ].coordinates[ 0 ].lon );
	}
} );
