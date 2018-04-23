//GET route witht he url `/api/friends`, which is used to display a JSON of all possible friends
//POST route `/api/friends' to handle incoming survey results and compatiblity logic
app.get("/api/friends", function(req, res) {
  return res.send(friends);
});

function Friend(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10){
	this.a1 = a1;
	this.a2 = a2;
	this.a3 = a3;
	this.a4 = a4;
	this.a5 = a5;
	this.a6 = a6;
	this.a7 = a7;
	this.a8 = a8;
	this.a9 = a9;
	this.a10 = a10;
}

function addFriend(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10){
  var Friend = new Friend(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
}

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  console.log(req.body);
  addTable(newFriend.a1, newFriend.a2, newFriend.a3, newFriend.a4, newFriend.a5, newFriend.a6, newFriend.a7, newFriend.a8, newFriend.a9, newFriend.a10);
  res.json(newFriend);
});