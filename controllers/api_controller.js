var mysql = require("mysql");
let finalNounObj = require("noun.js");

var connection = mysql.createConnection({
    host: process.env.DB_HOST,

    // Your port
    port: 8080,

    // Your username
    user: process.env.DB_USER,

    // Your password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
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