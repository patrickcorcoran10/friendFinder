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
allFriendsScores = [];
var newFriendScores = [];
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var newFriendScore = parseInt(newFriend.scores);
    
    // Create Variables for Printing Best Match
    var bestMatchName = "";
    var bestMatchPhoto = "";
    var topScore = 100;

    for (var i = 0; i < friendsData.length; i++) {
        var idealScore = 0;
        for (var x = 0; x < newFriend.length; x++) {
            idealScore += Math.abs(friendsData[i].scores[x] - newFriendScore[x])
        }
        if (idealScore < topScore) {
            bestMatchName = friendsData[i].name;
            bestMatchPhoto = friendsData[i].photo;
        }
        
    };
    console.log(bestMatchName);
        
    friendsData.push(newFriend);
    res.json(newFriend);
    
    
});


app.post("/api/clear", function() {
    // friendData = [];

    // console.log(friendsData);
});
};