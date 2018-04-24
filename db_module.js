const { Client } = require('pg');
var outcom = "";

console.log("\nDB MOD CONNECTED\n");

var result = "*";

exports.select_all = function()
{

	const client = new Client({
		  connectionString: process.env.DATABASE_URL,
		  ssl: false,
		});

		client.connect();
		//http://www.postgresqltutorial.com/postgresql-serial/
		client.query("SELECT * FROM users;", (err, res) => {
		  if (err)
		  {
		  	console.log("\nSHANE error is in the query!\n");
		  	console.log(err);
		  }  
		  for (let row of res.rows) 
		  {
		    console.log(JSON.stringify(row));
		    result += JSON.stringify(row);
		  }
			console.log("\nQUERY FINISHED!\n");
		  client.end();
		});

		return result;
}

exports.update = function()
{
	return result;
}

exports.get_result = function ()
{
	return result;
}

exports.result = result;
