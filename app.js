const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("assets"));

//  Variables to be passed
// var name = "",
//     imageUrl = "";

//routes
app.get("/", function(req, res){
    let name = "JavaScript",
    imageUrl = "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png";
    
    res.render("index.ejs", {name:name, image:imageUrl});
    console.log("index route");
} );

app.get("/index", function(req, res){
    let name = "JavaScript",
    imageUrl = "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png";
    
    res.render("index.ejs", {name:name, image:imageUrl});
    console.log("index route");
} );

app.get("/angular", function(req, res){
    let name = "Angular",
    imageUrl = "https://cdn.worldvectorlogo.com/logos/angular-icon.svg";
    
    res.render("angular.ejs", {name:name, image:imageUrl});
    console.log("angular route");
} );

app.get("/react", function(req, res){
    let name = "React",
    imageUrl = "https://cdn.worldvectorlogo.com/logos/react.svg";
    
    res.render("react.ejs", {name:name, image:imageUrl});
    console.log("react route");
} );

app.get("/vue", function(req, res){
    let name = "Vue",
    imageUrl = "https://cdn.worldvectorlogo.com/logos/vue-9.svg";
    
    res.render("vue.ejs", {name:name, image:imageUrl});
    console.log("vue route");
} );

app.get("/single", function(req, res){
    res.render("single.ejs");
    console.log("single route");
} );



// Herkou Listener
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Running Express Server...");
});