DROP TABLE categories, types, users, details, monies, project;

create table users(
    id serial primary key not null,
    name text not null
);
alter SEQUENCE users_id_seq RESTART 1;
create table categories(
    id serial primary key not null,
    category text not null
);

create table types(
    id serial primary key not null,
    project_type text not null
);

create table project(
    id serial primary key not null,
    user_id int not null,
    date_created text not null,
    team_members text not null,
    repo text not null,
    stars int not null,
    category_id int not null,
    type_id int not null,
    money_id int not null
);

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
    repo_link text not null,
    position text not null,
    followers int,
    type text ,
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
