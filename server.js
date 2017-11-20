// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require('./app/data/friends.js');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
//var routes = require('./routing/htmlRoutes');

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// =============================================================

// req.body hosts is equal to the JSON post sent from the user
// This works because of our body-parser middleware
app.post("/survey", function (req, res) {
  var userData = req.body;
  console.log(userData);
  eachFriend(userData);
  friends.pushUser(userData);
  res.json(friends.users[bestMatch]);
});

var sumArray = [];
var bestMatch;

function compareUsers(userDataParameter) {
  var compareScore = friends.users[y].scores;
  var newScore = userDataParameter.scores;
  var compareArray = [];
  var total = 0


  for (i = 0; i < newScore.length; i++) {
    compareArray.push(Math.abs(compareScore[i] - newScore[i]));
    total += compareArray[i];
  }

  sumArray.push(total);

  bestMatch = sumArray.indexOf(Math.min.apply(null,sumArray));

  console.log(bestMatch);
  
  console.log('sumArray == ' + sumArray);

}

function eachFriend(userDataParameter){
  sumArray = [];
  for (y = 0; y < friends.users.length; y++){
    compareUsers(userDataParameter);
  }
}

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



