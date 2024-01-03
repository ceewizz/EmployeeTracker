// Variable and Dependencies
const inquirer = require('inquirer');
const db = require('db');
const mysql = require('mysql');


// Initialize Server after connection db
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'password',
    database: 'DBemployees'
});


// Initialize Connection
connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id' + connection.threadId());
    startPrompt();


});

// Starting the prompt
function startPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Start by selecting a choice',
            name: 'choice',
            choices: [
                "View All Employees",
                "Employee's Roles",
                "Employee's Department",
                "Update Employee",
                "Add New Employee",
                "Add Role",
                "Add Department"
            ]
            
        }
    ]).then(function(val) {
        switch (val.choice) {
            case "View All Employees":
                viewAllEmployees();
                break;

                case "View All Roles":
                    viewAllRoles();
                break;

                case "View All Departments":
                    viewAllDepartmets();
                break;

                case "Update Employee":
                    updateEmployee();
                break;

                case "Add New Employee":
                    addEmployee();
                break;

                case "Add Role":
                    addRole();
                break;

                case "Add Department":
                    addDepartment();
                break;
        }
    })
}

// Viewing all of the employees
function viewAllEmployees() {
    console.log("Viewing all of the employees\n");
    var query = `SELECT e.id, e.first_name, e.last_name, r.title, r.salary, department.name, CONCAT(manager.first_name, ' ' , manager.last_name) As Manager FROM employee e
    LEFT JOIN role r ON e.role_id = r.id
    INNER JOIN department on department.id = r.department_id LEFT JOIN employee m ON m.id = e.manager_id`

    connection.query(query, function (err, res)
    {
        if (err) throw err;

        console.table(res);
        console.log("All Employees Displayed\n");

        startPrompt();
    });
}

// Viewing all employees roles
function viewAllRoles() {
    connection.query("SELECT e.id, e.first_name, e.last_name, department.name AS department FROM employee e JOIN role r ON e.role_id = r.id JOIN department ON r.department_id = department.id ORDER BY e.id;",
    function(err, res) {
        if (err) throw err
        console.table(res)
        startPrompt()

    })
}

// Viewing all employee departments
function viewAllDepartmets() {
    connection.query("SELECT e.id, e.first_name, e.last_name, department.name AS department FROM employee JOIN role ON e.role_id = r.id JOIN department ON r.department_id = department.id ORDER BY e.id;",
    function(err, res) {
        if (err) throw err
        console.table(res)
        startPrompt()

    })

}

// Now selecting r queries r title from the adding prompt for employees

var roleArr = [];
function selectRole() {
    connection.query("SELECT * FROM role r", function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            roleArr.push(res[i].title);
        }
    })
    return roleArr;
}

// Selecting r query m in the adding prompt for employees
var managerArr = [];
function selectManager() {
    connection.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
            managersArr.push(res[i].first_name);
        }
    })
    return managersArr;
}

// Adding the employee
function addEmployee() {
    inquirer.prompt([
        {
            name: "firstname",
            type: "input",
            message: "Please Enter New Employee's First Name"
        },
        {
            name: "lastname",
            type: "input",
            message: "Please Enter New Employee's Last Name"
        },
        {
            name: "role",
            type: "list",
            message: "Please Select New Employee's Position",
            choices: selectRole()
        },
        {
            name: "choices",
            type: "rawlist",
            message: "What's the New Employee's Manager's Name?",
            choices: selectManager()
        }
    ]).then(function (val) {
        var roleId = selectRole().indexOf(val.role) + 1
        var managerId = selectManager().indexOf(val.choice) + 1
        connection.query("CONFIRM ADD?",
        {
            first_name: val.first_name,
            last_name: val.last_name,
            manager_id: managerId,
            r_id: roleId
        }, function (err) {
            if (err) throw err
            console.table(val)
            startPrompt()

        })

    })
}
// Updating the Employee
function updateEmployee() {
    connection.query("SELECT e.id e.last_name, r.title FROM employee JOIN role on e.role_id = r.id;", function(err, res) {
       
        if (err) throw err
        console.log(err)
        inquirer.prompt([
            {
                name: "lastName",
                type: "rawlist",
                choices: function() {
                var lastName = [];
                for (var i = 0; i < res.rows.length; i++) {
                    lastName.push(res[i].last_name);


            }
            return lastName;
        },
        message: "Please Enter New Employee's Last Name" ,
    },
    {
        name: "role",
        type: "rawlist",
        message: "Please Enter New Employee's Position" ,
        choices: selectRole()

    },

        ]).then(function(val) {
            var roleId = selectRole().indexOf(val.r) + 1
            connection.query("CONFIRM ADD?",
            {
                last_name: val.lastName,

            },
            {
                r_id: roleId

            },
            function(err) {
                if (err) throw err
                console.table(val)
                startPrompt()

            })

        });

    });

}

// Adding New Employee's Role
function addRole() {
    connection.query("SELECT r.id, r.title AS Title, r.salary AS Salary FROM role", function (err,res) {
     inquirer.prompt([
        {
            name: "Title",
            type: "input",
            message: "Please Enter New Employee's Title"
        },
        {
            name: "Salary",
            type: "input",
            message: "Please Enter New Employee's Paid"

        }
    ]).then(function(res) {
        connection.query(
            "CONFIRM ADD?",
            {
                title: res.Title,
                salary: res.Salary,

            },
            function(err) {
                if (err) throw err
                console.table(res);
                startPrompt();

            }
        )
        });
    });
}

// Adding New Employee's Department
function addDepartment() {
    inquirer.prompt([ {
        name: "name",
        type: "input",
        messsage: "Please Enter New Employee's Department"
    }
]).then(function(res) {
    var query = connection.query(
        "CONFIRM ADD?" ,
        {
            name: res.name

        },
        function(err) {
            if (err) throw err
            console.table(res);
            startPrompt();

        }
    )
})
}
