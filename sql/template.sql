DROP TABLE users, details, monies;

create table users(
    id serial primary key not null,
    name text not null
);
alter SEQUENCE users_id_seq RESTART 1;

create table details(
    id serial primary key not null,
    name_id int not null,
    age int not null,
    passwords text not null,
    email text not null,
    bio text not null,
    address text not null,
    rating int not null,
    contact text not null,
    position text not null,
    
    FOREIGN key (name_id) references users(id)
);
alter SEQUENCE details_id_seq RESTART 1;

create table monies(
    id serial primary key not null,
    loan int not null,
    loaned int not null,
    deposit int not null,
    capital int not null,
    amount_left int not null,
    detail_id int not null,
    FOREIGN key (detail_id) references details(id)
);

\i sql/insert.sql 
