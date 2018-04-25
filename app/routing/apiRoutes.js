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
// function Friend(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10){
// 	this.a1 = a1;
// 	this.a2 = a2;
// 	this.a3 = a3;
// 	this.a4 = a4;
// 	this.a5 = a5;
// 	this.a6 = a6;
// 	this.a7 = a7;
// 	this.a8 = a8;
// 	this.a9 = a9;
// 	this.a10 = a10;
// }

// function addFriend(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10){
//   var Friend = new Friend(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
// }

// app.post("/api/friends", function(req, res) {
//   var userInput = req.body;
//   console.log(req.body);
//   addTable(userInput.a1, userInput.a2, userInput.a3, userInput.a4, userInput.a5, userInput.a6, userInput.a7, userInput.a8, userInput.a9, userInput.a10);
//   res.json(userInput);
// });

