const express = require("express");
const date = require(__dirname + "/modifed_modules/date.js");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

const items = ["Ăn", "Chơi", "Ngủ"];
const workItems = [];

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    const day = date.getDay();

    res.render("list", {
        kindOfDay: day,
        listOfItems: items
    });
});

app.post("/", (req, res) => {

    const kindOfList = req.body.list;
    const item = req.body.newTask;

    switch (kindOfList) {
        case "Work Day":
            workItems.push(item);
            res.redirect("/work");
            break;
        default:
            items.push(item);
            res.redirect("/");
            break;
    }
});

app.get("/work", (req, res) => {

    res.render("list", {
        kindOfDay: "Work Day",
        listOfItems: workItems
    });
});

app.get("/about", (req, res) => {
    res.render("about"); 
});

app.post("/about", (req, res) => {
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server started on port 3000.");
});