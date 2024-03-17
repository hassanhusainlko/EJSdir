const express = require("express");
let app = express()

const path = require("path")

let port = 8080;

app.set("views", path.join(__dirname, "/views"))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/apple", (req, res) =>{
    res.send("this is an apple")
})

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6)+1 
    res.render("rolldice.ejs", {diceVal});
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    let instadata = require("./data.json")
    let data = instadata[username]
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs")
    }
    
});