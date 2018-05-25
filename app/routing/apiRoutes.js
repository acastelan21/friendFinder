var friends = require("../data/friends");
module.exports = function(app){

    app.get("/api/friends", function(req,res){
        
       return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res){
        friends.push(req.body)
       res.json(true);
        //check to see which friend from friend array has the most in common with 

    })
}

