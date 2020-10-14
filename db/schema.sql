create database todos;

create table todos (
	id int primary key not null auto_increment,
    text varchar(255) not null
);