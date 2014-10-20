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
//router.get shmainei oti 8a breis ta json sto localhost:3000/json/getonoma
router.get('/getMainMenu', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=mainmenu','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getSubMenu', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=submenu','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getTopSlideshow', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=topslideshow','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getLatestProjects', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=latestprojects','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getLatestNews', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=latestnews','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getLatestFooter', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=latestnewsfooter','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getTexts', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=Texts','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getPortfolio', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=portfolio','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getPortfolioMobile', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=portfoliomobile','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getPortfolioIllustrations', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=portfolioillustrations','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getPortfolioWebsites', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=portfoliowebsites','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getPraktiki', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=praktiki','GET', function(data) {
  	res.send(data);
  })
});

router.get('/getContact', function(req, res) {
  requestToITWORX('imeet.gr', '/index?action=ContactForm','GET', function(data) {
  	res.send(data);
  })
});

module.exports = router;
