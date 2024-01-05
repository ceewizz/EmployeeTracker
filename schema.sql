
DROP DATABASE IF EXISTS DB_employees;

USE DB_employees;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)

);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NULL,
    salary DECIMAL(10.1) NULL,
    department_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    manager_id INT NULL,
    role_id INT NULL,
    PRIMARY KEY (id)
);


USE DBemployees;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("TECHNOLOGY");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Technology", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 130000, 4);
INSERT INTO role (title, salary, department
VALUES ("Lead", 180000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "David", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nick", "Ryan", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Karen", "Michelle", 1, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jackie", "Betty", 3, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Janet", "Gabe", 2, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tiffany", "Leon", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jennifer", "Richard", 1, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Mary", 3, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Kristy", 2, 5);