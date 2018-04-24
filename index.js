const { Client } = require('pg');
var shane = require('./shane_module');
var db_mod = require('./db_module');
var express = require('express');
var app = express();

/*mod stuff (later html)*/
var str = shane.module_connection();

/*DB STUFF*/
console.log("\nABOUT TO DO THE DB STUFF!\n");
db_mod.select_all();

var result = db_mod.result;
console.log("\nRESULT : " + result +  " " + " \n");
result = db_mod.get_result();
console.log("\nRESULT : " + result +  " " + " \n");

app.get('/', function(request, response)
	{
		
		
		
		console.log("\nDB BETTER BE DONE BECAUSE I'M WRITING TO THE SCREEN!\n");
		/*waiting until result has a value*/
		var i = 0;
		while ( result.length < 2)
		{
			console.log("trying to get value of result : " + result + " \tfor the " + i + "th time");
			result = db_mod.update();
			i++;
		}
		console.log("left the loop before result : " + result + " length : " + result.length);
		response.send("GET content changed " + str + " <br> result from query <br> " + result );

	});
app.get('/query', function(request, response)
	{
		response.send("file.html contents should go here once if figure how to use fs module in expresss.");
	});

app.post('/', function(request, response)
	{
		response.send("POST content");
	});

app.listen( (process.env.PORT || 3000), function()
	{
		//console.log('port number on next line');
	});







/*sucessful sql statements
INSERT INTO users(name) VALUES('shane');
SELECT * FROM users;
*/

/*database structure
{"name":"shane","text":null,"id":1} 
*/
