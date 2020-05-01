const mysql = require("mysql");
const inquirer = require("inquirer");
// // const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "Leonard_Supply_db",
});

connection.connect(function (err) {
  if (err) throw err;
  startTracker();
});

function startTracker() {
  inquirer
    .prompt({
      type: list,
      choices: [
        "Add departments",
        "Add roles",
        "Add employees",
        "View departments",
        "View roles",
        "View employees",
        "Update employee roles",
        "Update employee managers",
        "View employees by manager",
        "Remove departments",
        "Remove roles",
        "Remove employees",
        "View total department budget",
        "Exit",
      ],
      message: "What option would you like to select?",
      name: "option",
    })
    .then(function (answer) {
      console.log("You have selected: " + answer.option);

      switch (answer.option) {
        case "Add departments":
          addDepartment();
          break;
        case "Add roles":
          addRoles();
          break;
        case "Add employess":
          addEmployees();
          break;
        case "View departments":
          viewDepartment();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employess":
          viewEmployees();
          break;
        case "Update employee roles":
          updateEmployeeRoles();
          break;
        case "Update employee managers":
          updateEmployeeManagers();
          break;
        case "View employees by manager":
          viewEmployeesByManager();
          break;
        case "Remove departments":
          removeDepartments();
          break;
        case "Remove roles":
          removeRoles();
          break;
        case "Remove employees":
          removeEmployees();
          break;
        case "View total department budget":
          viewTotalDepartmentBudget();
          break;
        case "Exit":
          exit();
      }
    });
}
