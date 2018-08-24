// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends:

var friendsData = require("../data/friends");

module.exports = function(app) {

// Routes to GET JSON of all possible friends:

app.get("/api/friends", function(req, res) {
    res.json(friendsData);
});

// Routes to POST incoming survey results:

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);
    friendsData.push(newFriend);
    res.json(newFriend);
});

app.post("/api/clear", function() {
    friendData = [];

    console.log(friendsData);
});
};