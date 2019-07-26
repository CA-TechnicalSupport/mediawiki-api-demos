<?php

//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_allimages_by_date.php

    MediaWiki API Demos
    List all images in the namespace, starting from January 1, 2010, at 18:05:46 UTC.

    MIT License
*/

$endPoint = "https://en.wikipedia.org/w/api.php";
$params = [
    "action" => "query",
    "format" => "json",
    "list" => "allimages",
    "aisort" => "timestamp",
    "aistart" => "2010-01-01T18:05:46Z"
];

$url = $endPoint . "?" . http_build_query( $params );

$ch = curl_init( $url );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
$output = curl_exec( $ch );
curl_close( $ch );

$result = json_decode( $output, true );

foreach( $result["query"]["allimages"] as $k => $v ) {
    echo( $v["title"] . "\n" );
}