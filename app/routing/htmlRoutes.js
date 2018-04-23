//Need a GET route to `/survey` which should display the survey page
//default, catch-call route that leads to `home.html`, which displays the home page
app.get("/", function(req, res) {
	console.log("path is: ",path.join(__dirname + "/../public/", "home.html"))
  res.sendFile(path.join(__dirname + "/../public/",  "home.html"));
});

app.get("/survey", function(req, res) {
	console.log("path is: ",path.join(__dirname + "/../public/", "survey.html"))
  res.sendFile(path.join(__dirname + "/../public/",  "survey.html"));
});

app.get("/home", function(req, res) {
	console.log("path is: ",path.join(__dirname + "/../public/", "home.html"))
  res.sendFile(path.join(__dirname + "/../public/",  "home.html"));
});