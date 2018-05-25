var friends = require("../data/friends");
module.exports = function(app){

    app.get("/api/friends", function(req,res){
        console.log;
       return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res){
        ;
        var incomingScore = req.body.scores;
        var scoresArray =[];
        var friendsCount = 0; 
        var friendMatch = 0; 


        for(var i=0; i<friends.length; i++){
            
        var scoreDiff = 0; 
        for (var j=0; j<incomingScore.length; j++){
            scoreDiff +=(Math.abs(parseInt(friends[i].scores[j])-parseInt(incomingScore[j])));

        }
        scoresArray.push(scoreDiff);
        console.log(scoreDiff)
    }
    for(var i=0; i<scoresArray.length; i++){
        console.log("working5");
        if(scoresArray[i]<=scoresArray[friendMatch]){
            friendMatch = i;
            console.log(friendMatch)
        }
    }
    var bff = friends[friendMatch];
    res.json(bff);
    friends.push(req.body);
    console.log(bff);

    });
};

