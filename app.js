//require module json-file-reader so you can use it's function here
var readParsedObject = require(__dirname + '/json-file-reader.js'); 

// call function from module, first parameter = filename it should read (it's the first 
	// parameter the function in the module needs), second parameter is 
	// a callback function (= always anonymous), the second parameter the function
	// in the module needs. Because it is a callback function, it only runs when the first
	// (readParsedObject) is finished
	// the parameter in this callback function is the resulted data of the module (callback(readObject)), 
	// in this case the read Countries file: a new JS object (you can call it everything, doesn't 
	// have to correspond to result of module function (readObject), readCountries is more 
	// discriptive for this app)
readParsedObject('countries.json', function(readCountries){
	//loop through new JS object (an array in this case so not a for/in loop)
	for (var i = 0; i < readCountries.length; i++) {
				//object[index].key when you fill in Afghanistan in terminal on index 2 it thus stands for:
				//readCountries[0].name === Afghanistan
				if(readCountries[i].name === process.argv[2]){
					//You are now in the, in the case of Afghanistan at: object[0],
						//so you can to the value of name so you can also access the value of topLevelDomain
					console.log("Country: " + readCountries[i].name + 
						"\nTop Level Domain: " + readCountries[i].topLevelDomain);
				}
		}
})







//--------------------------------
// Part 2: solution above ^
// - For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// - One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// - Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

// - The output of the application should have the following format: 

// Country: <country name>
// Top Level Domain: <tld>

//--------------------------------

// Part 1
// Create a Node.js application that does the following:
// - Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.jsonIn een nieuw venster bekijken
// - Outputs information about that specific country. Must be in the following format:
// Country: <country name>
// Top Level Domain: <tld>

//-------------------------------

// var fs = require('fs');

// //read the JSON file throw error / read data
// fs.readFile(__dirname + '/countries.json', 'utf8', function(err, data){
// 		if (err) {
// 			throw err;
// 		}
// 		//save data in object you declare
// 		//JSON parse data into JavaScript object (an array is also an object)
// 		var countriesObject = JSON.parse(data);
// 		//loop through new JS object (an array in this case so not a for/in loop)
// 		for (var i = 0; i < countriesObject.length; i++) {
// 				//object[index].key wanneer je Afghanistan invoert is dat dus:
// 				//countriesObject[0].name === Afghanistan
// 				if(countriesObject[i].name === process.argv[2]){
// 					//je zit nu in object[0], dus als je bij value van name kan kan je 
// 						//bij value van topLevelDomain
// 					console.log("Country: " + countriesObject[i].name + 
// 						"\nTop Level Domain: " + countriesObject[i].topLevelDomain);
// 				}
// 		}
// });
