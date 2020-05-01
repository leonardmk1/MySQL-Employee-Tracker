const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "Leonard_Supply_db",
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  startTracker();
  // viewEmployee();
  // viewrole();
  // viewDepartment();
 
});

function startTracker() {
  inquirer
    .prompt({
       name: "action",
       type: "list",
       message: "What option would you like to select?",
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
        "Exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "Add departments":
          addDepartment();
          break;
        case "Add roles":
          addRole();
          break;
        case "Add employees":
          addEmployee();
          break;
        case "View departments":
          viewDepartment();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employees":
          viewEmployees();
          break;
        case "Update employee roles":
          updateEmployeeRoles();
          break;
        // case "Update employee managers":
        //   updateEmployeeManagers();
        //   break;
        // case "View employees by manager":
        //   viewEmployeesByManager();
        //   break;
        // case "Remove departments":
        //   removeDepartments();
        //   break;
        // case "Remove roles":
        //   removeRoles();
        //   break;
        // case "Remove employees":
        //   removeEmployees();
          // break;
        // case "View total department budget":
        //   viewTotalDepartmentBudget();
        //   break;
        case "Exit":
           connection.end();
          break;
      }
    });
}

function addDepartment(){
  inquirer
  .prompt({
    type: "input",
    message: "What is the name of the department?",
    name: "deptName"
  }).then(function(answer){
    connection.query("INSERT INTO department (name) Values (?)", [answer.deptName], function(err,res){
      if (err) throw err;
      console.table(res);
      startTracker();
    })
  })
}

function addRole(){
  inquirer
  .prompt([
  {
    type: "input",
    message: "What is the title of the role?",
    name: "title"
  },
  {
    type: "input",
    message: "What is the salary of the role?",
    name: "salary"
  },
  {
    type: "input",
    message: "What is the department of the role?",
    name: "id",
  }
  ]).then(function(answer){
    connection.query("INSERT INTO role (title, salary, department_id) Values (?, ?, ?)", [answer.title, answer.salary, answer.id], function(err,res){
      if (err) throw err;
      console.table(res);
      startTracker();
    })
  })
}

function addEmployee(){
  inquirer
  .prompt([
  {
    type: "input",
    message: "What is the first name of the employee?",
    name: "first_name"
  },
  {
    type: "input",
    message: "What is the last name of the employee?",
    name: "last_name"
  },
  {
    type: "input",
    message: "What is the role id of the employee?",
    name: "role_id",
  },
  {
    type: "input",
    message: "What is the manager id of the employee?",
    name: "manager_id",
  }
  ]).then(function(answer){
    connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) Values (?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function(err,res){
      if (err) throw err;
      console.table(res);
      startTracker();
    })
  })
}

function viewDepartment() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    startTracker();
  })
}

function viewRoles() {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    startTracker();
  })
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      console.table(res);
      startTracker();
    })
  }

  function updateEmployeeRoles() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Which employee would you like to update?",
          name: "employeeUpdate"
        },
        {
          type: "input",
          message: "Which role would you like to update for this employee?",
          name: "roleUpdate"
        }
      ])
      .then(function(answer){
        connection.query("UPDATE employee SET role_id=? WHERE first_name= ?",[answer.employeeUpdate, answer.roleUpdate],function(err, res){
        if (err) throw err;
        console.table(res);
        startTracker();
      })
    })
  }
