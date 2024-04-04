-- Insert data into WAREHOUSE table
INSERT INTO WAREHOUSE (name, location, width, length, height) VALUES
('Warehouse A', '123 Main St, City A', 100.00, 200.00, 50.00),
('Warehouse B', '456 Elm St, City B', 150.00, 300.00, 60.00),
('Warehouse C', '789 Oak St, City C', 120.00, 250.00, 55.00);

-- Insert data into VEHICLE table
INSERT INTO VEHICLE (model, year, color, vin, width, length, height, is_reserved, warehouse_id) VALUES
('Toyota Camry', 2022, 'Blue', 'VIN001', 70.00, 180.00, 55.00, false, 1),
('Honda Civic', 2021, 'Red', 'VIN002', 68.00, 175.00, 54.00, true, 1),
('Ford Mustang', 2023, 'Black', 'VIN003', 75.00, 185.00, 56.00, false, 2),
('Chevrolet Corvette', 2022, 'Yellow', 'VIN004', 77.00, 190.00, 50.00, false, 2),
('Tesla Model S', 2023, 'White', 'VIN005', 80.00, 195.00, 57.00, true, 3);

-- Insert data into ADMINISTRATOR table
INSERT INTO ADMINISTRATOR (first_name, last_name, email, password) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123'),
('Jane', 'Smith', 'jane.smith@example.com', 'password456'),
('Michael', 'Johnson', 'michael.johnson@example.com', 'password789');

-- Insert data into WAREHOUSE_ACCESS table
INSERT INTO WAREHOUSE_ACCESS (admin_id, warehouse_id) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 3),
(3, 1),
(3, 3);