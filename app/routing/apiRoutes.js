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
    // Run a set of for loops to pull the friendsData's scores as well as the newFriend's.
    for (var i = 0; i < friendsData.length; i++) {
        var idealScore = 0;
        for (var x = 0; x < newFriendScore.length; x++) {
            idealScore += Math.abs(friendsData[i].scores[x] - newFriendScore[x])
        }
        // Test the Scores ofs of the newFriend against a hypothetical "topScore" to find the max difference. 
        if (idealScore < topScore) {
            bestMatchName = friendsData[i].name;
            bestMatchPhoto = friendsData[i].photo;
        }
        
    };
    console.log(newFriendScore);
        
    friendsData.push(newFriend);
    res.json(newFriend);
    // Print the 
    console.log(bestMatchName);
    console.log(bestMatchPhoto);
    res.json({ status: "OK", matchName: bestMatchName, matchPhoto: bestMatchPhoto})
});



app.post("/api/clear", function() {
    
});
};