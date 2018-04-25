// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");

module.exports = function(app) {
  // API GET Request
  // Below code handles when users "visit" the survey page.
  // In each of the below cases when a user visits a link
  // they are shown a JSON of the data in the table
  // ---------------------------------------------------------------------------	
app.get("/api/friends", function(req, res) {
  res.send(friendsData);
});

// API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
app.post("/api/friends", function(req, res) {
  //capture of the user input object
  var userInput = req.body;
  var userResponses = userInput.scores;
  //best friend match portion
  //set up best friend variables
  var matchName = '';
  var matchImage = '';
  var totalDifference = 10000; //initial value large for comparison
    // get diff
      for (var i = 0; i < friendsData.length; i++){
          var diff = 0;
          for (var j = 0; j < userResponses.length; j++){
            diff += Math.abs(friendsData[i].scores[j] - userResponses[j]);
          }
          
        // get the match
        //if lowest  difference, record  friend match
          
        if (diff < totalDifference) {
          totalDifference = diff
          matchName = friendsData[i].name;
          matchImage = friendsData[i].photo;
        }
      }  
  // var yourPerfectMatch = friendsData[3]
  //push user submitted information
	friendsData.push(userInput);

  //push corresponding friend match
  res.json({status: 'OK', matchName: matchName, matchImage: matchImage});


});

}
