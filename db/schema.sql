drop database if exists todos_db;
create database todos_db;

use todos_db;
create table todos (
	id int primary key not null auto_increment,
    text varchar(255) not null
);
