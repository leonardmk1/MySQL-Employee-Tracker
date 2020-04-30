const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "",
    database: "Leonard_Supply_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    startTracker();
  });

  function startTracker(){

  }