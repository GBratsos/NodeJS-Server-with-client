var express = require('express');
var router = express.Router();
var http = require('http');

var requestToITWORX = function(domain, path, method, callback) {
	var options = {
	  host: domain,
	  port: 80,
	  path: path,
	  method: method
	};

	
	http.get(options, function(res) {
	  var json = "";
	  res.setEncoding('utf8');
	  console.log("Got response: " + res.statusCode);

	  res.on("data", function(chunk) {
	    json += chunk;
	  });
	  res.on('end', function() {
	  	callback(json);
	  })
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
}

/* GET json listing. */
//router.get shmainei oti 8a breis ta json sto localhost:3000/json/getVillages
router.get('/getVillages', function(req, res) {
  requestToITWORX('wom.itworx.gr', '/index?action=getVillages','GET', function(data) {
  	res.send(data);
  })
});

module.exports = router;
