-- init.sql

-- Create the Student table
CREATE TABLE IF NOT EXISTS Student (
  student_id SERIAL PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  admission_number VARCHAR(50) NOT NULL UNIQUE
);

-- Create the Registration table
CREATE TABLE IF NOT EXISTS Registration (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- You can add more table creation statements here if needed