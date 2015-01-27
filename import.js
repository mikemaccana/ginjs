#!/usr/bin/env node
var fs = require('fs'),
	csvParse = require('csv-parse'),
	agave = require('agave'),
	util = require('util'),
	jsonFile = require('jsonfile'),
	twitter = require('twitter');

var twit = new twitter({
	consumer_key: 'XVJUr8DMggzsq5d2Y5DRLQ',
	consumer_secret: '9MGyQJV0ddhiIUoco3NUjMzMjoG6tCnx0IvVLrkE',
	access_token_key: '8325052-VVKim25I4h75nx7K8Hv8wSqBGifipTHnNYNMAyyMKg',
	access_token_secret: '6ZY3dmSe8xW4fC16AMj9TfDevZfHY5rKEb4o0dcPJU'
});

agave.enable()

var log = console.log.bind(console),
	deepLog = function(object) {
		console.log(JSON.stringify(object, null, 2))
	}

// Tito files export as 'Little-endian UTF-16 Unicode text, with very long lines'
var fileContents = fs.readFileSync('import.csv','ucs2')
fileContents = fileContents.replace(/"/g, '');

var alphabetical = function(a, b) {
	var textA = a.toLowerCase();
	var textB = b.toLowerCase();
	return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}

var whosComing = {
	twitter: [],
	// people not on twitter
	others: 0
}

csvParse(fileContents, {}, function(err, output){

	if ( err ) {
		return
	}

	var handles = [];

	var notOnTwitterCount = 0;

	output.forEach(function(line, index){
		if ( index !== 0 ) {
			var handle = line[21]
			if ( handle !== '-' ) {
				handles.push(handle.strip('@'))
			} else {
				whosComing.others++;
			}
		}
	})

	handles.sort(alphabetical)

    log('handles', handles.join(','))

	twit.get('/users/lookup.json', {screen_name:handles.join(',')}, function(error, data, response) {

        if ( error ) {
            log('Error getting twitter handles', error)
            return
        }

        // Nerd.
		data.forEach(function(datum){
			whosComing.twitter.push({
				handle: datum.screen_name,
				avatar: datum.profile_image_url
			})
		})

		jsonFile.writeFile('attendees.json', whosComing, function(err) {
			if (err) {
				return log(err)
			}
			log('Done!')
			process.exit(0)
		})

	});



});

