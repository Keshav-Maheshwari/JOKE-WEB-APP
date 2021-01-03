const express = require("express");
const https = require("https");
const BodyParser = require("body-parser");
const app = express();
app.use(BodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + ("/index.html"));

});


app.post("/", function (req, res) {
    let jok = req.body.T;
    let opt = req.body.N;





    let url = "https://v2.jokeapi.dev/joke/" + jok + "?type=" + opt;

    https.get(url, function (response) {

        response.on("data", function (data) {
            let material = JSON.parse(data);


            let head = material.setup
            let feel = material.delivery;
            let alone = material.joke;

            if (opt == "Twotype") {
                res.write(`<h1>THE JOKE IS : ${head} ${feel}</h1 `);
            }
            else {
                res.write(`<h1>THE JOKE IS : ${alone}</h1 `);
            }
            res.send();

        });
    });

});



app.listen(3000, function (req, res) {
    console.log("Server Started At Port 3000");
});