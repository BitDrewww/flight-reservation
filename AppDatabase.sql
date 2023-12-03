use world;
create table Users (
	adminflag bool,
    email varchar(300),
    primary key (email),
    pass varchar(300)
);

create table Flights (
    id mediumint not null auto_increment,
    primary key (id),
	flightDt datetime,
	departure varchar(1000),
    arrival varchar(1000),
    price decimal(10,2)
);

create table Reservation (
    reservation_id mediumint primary key auto_increment,
    flight_id mediumint,
    email varchar(300),
    seat_id varchar(1000),
	price decimal(10,2),
    foreign key (flight_id) references Flights(id) ON DELETE CASCADE,
    foreign key (email) references Users(email) ON DELETE CASCADE
);

insert into Users(adminflag, email, pass)
Values
	(True, "admin@admin.com", "admin");
insert into Flights(flightDt, departure, arrival, price)
Values
	("2023-12-25", "Calgary", "Korea","992.24"),
    ("2023-12-25", "Calgary", "Korea", "699.32"),
    ("2023-12-25", "Toronto", "Hong Kong", "483.23"),
    ("2024-01-01", "Edmonton", "Vancouver", "123.12");
select * from Reservation;
select * from Flights;
select * from Users;

drop table Reservation;
drop table Flights;
show tables;