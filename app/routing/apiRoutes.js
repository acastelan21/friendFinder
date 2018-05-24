var friends = require("../data/friends");

module.exports = function (app){

    app.get("/api/friends", function(req,res){
        res.json(friendsArray);
    });
    
    app.post("/api/friends"), function (req, res){
        //check to see which friend from friend array has the most in common with 

    }
}

