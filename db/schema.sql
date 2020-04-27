### Schema for the resetting the database 
DROP DATABASE IF EXISTS `deutsch_db`;
CREATE DATABASE deutsch_db;
USE deutsch_db;


### schema for importing a csv into a table
### need to put the csv into this special folder otherwaise permission denied
### need to put the id numbers in the csv file before you load it
LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/SampleNouns.csv' 
INTO TABLE nouns 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

### schema for temp noun table to test csv
CREATE TABLE nouns (
    id INT NOT NULL AUTO_INCREMENT,
    gender VARCHAR(255) NOT NULL,
    singular VARCHAR(255) NOT NULL,
    english VARCHAR(255) NOT NULL,
    plural VARCHAR(255) NOT NULL,
    englishplural VARCHAR(255) NOT NULL,
    category1 VARCHAR(255) NOT NULL,
    cetegory2 VARCHAR(255) NOT NULL,
    category3 VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);


### How to Add Quotes to Your Cells in Excel Automatically
### Highlight the cells you want to add the quotes.
### Go to Format –> Cells –> Custom.
### Copy/Paste the following into the Type field: \”@\”
### Click “okay”
### Be happy you didn't do it all by hand.

### temp Noun Schema

