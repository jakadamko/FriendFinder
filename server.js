// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
//var routes = require('./routing/htmlRoutes');

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// =============================================================

// Create New Characters - takes in JSON input
//This area we will store logic for identifying how many people are in the reservation array
//If there are more than 5 in the reservation array then push to waitlist array else go to reserve array

// for (var i = 0; i < reservation.length; i++) {
//   if (reservation.length > 5) {
//   }
// }


  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  app.post("/survey", function (req, res) {
    var newUser = req.body;
    repeatEach(userData);
    users.push(userData);
    //res.json(users[bestMatch]);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/survey/:userData?", function (req, res) {
 // var chosen = req.params.userData;

  // if (chosen) {
  //   console.log(chosen);

  //   for (var i = 0; i < reservation.length; i++) {
  //     if (chosen === reservation[i]) {
  //       return res.json(reservation[i]);
  //     }
  //   }
  //   return res.json(false);
  // }
  return res.json(userData);
});

app.get("/view/:waitlist?", function (req, res) {
  var chosen2 = req.params.waitlist;

  if (chosen2) {
    console.log(chosen2);

    for (var i = 0; i < waitlist.length; i++) {
      if (chosen2 === waitlist[i]) {
        return res.json(waitlist[i]);
      }
    }
    return res.json(false);
  }
  return res.json(waitlist);
});

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



