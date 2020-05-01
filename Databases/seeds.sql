INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000.00, 1), ("Salesperson", 80000.00, 2), ("Lead Engineer", 150000.00, 3),("Software Engineer", 120000.00,4),("Accountant", 125000.00, 5), ("Legal Team Lead", 190000.00, 6), ("Lawyer", 120000.00, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null), ("Mike", "Chan", 2, 1), ("Ashley", "Rodriguez", 3, null), ("Kevin", "Tupik", 4, 3), ("Malia", "Brown", 6, null), ("Sarah", "Lourd", 7, null), ("Tom", "Allen", 8, 7);
