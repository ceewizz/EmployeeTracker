# EmployeeTracker
Module 12 Creating an Employee Tracking database

## Description
Command line application to manage the employee tracking database using Node.js, Inquirer, and MySQL.

User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
Mock-Up
The following video shows an example of the application being used from the command line:

## Getting Started
You'll need to use the MySQL2 packageLinks to an external site. to connect to your MySQL database and perform queries, and the Inquirer packageLinks to an external site. to interact with the user via the command line.

## Resources
In order to install inquirer, please use npm i inquirer@8.2.4.

You might also want to make your queries asynchronous. MySQL2 exposes a .promise() function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the npm documentation on MySQL2Links to an external site..
department

id: INT PRIMARY KEY

name: VARCHAR(30) to hold department name

role

id: INT PRIMARY KEY

title: VARCHAR(30) to hold role title

salary: DECIMAL to hold role salary

department_id: INT to hold reference to department role belongs to

employee

id: INT PRIMARY KEY

first_name: VARCHAR(30) to hold employee first name

last_name: VARCHAR(30) to hold employee last name

role_id: INT to hold reference to employee role

manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)

## Credits
Chris Huynh

## Links

Github Repo: https://github.com/ceewizz/EmployeeTracker
Video Link: https://drive.google.com/file/d/1VmDKikG24pLsTlFsHDzgWsI9j79F_DPL/view

![Alt text](demovid.gif)