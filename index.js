const express = require("express")
const app = express()
const path = require("path")
const fetch = require("node-fetch")

app.set("view engine", "ejs")
app.set("views", path.join( dirname, "views"))

const key = "771970598769bf8861004c74e38ebbba";
let city = "Tartu"

app.get("/", function (req, res) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=${    city}&appid=${key}")
      .then((responce) => { 
        return responce.json()
      })
      .then((data) => {
        let description = data weather[0].description
        let city = data name
        let temp = data main temp
        console.log(description)
        console.log()
        console.log(data);
          })
          res.render("'index")
        })

app.listen(3000)