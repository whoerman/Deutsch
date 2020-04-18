var mysql = require("mysql");
let finalNounObj = require("noun.js");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8080,

    // Your username
    user: "root",

    // Your password
    password: "UNHBootCamp",
    database: "deutsch_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createNoun();
});

function createNoun() {
    console.log("Inserting a new word...\n");
    var query = connection.query(
        "INSERT INTO nouns SET ?", {
            ...finalNounObj
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " noun inserted!\n");
        }
    )
};