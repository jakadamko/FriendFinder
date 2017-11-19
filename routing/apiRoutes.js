// Your `apiRoutes.js` file should contain two routes:
// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

module.exports = function(app){  //added app parameter

app.get("/api/friends", function (req, res) {
    res.json();  //enter parameter This has to connect to the variable object
});


app.post("/api/friends", function (req, res) {
    res.json();
});
}



