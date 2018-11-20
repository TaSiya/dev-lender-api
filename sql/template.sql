DROP_EXISTING 

create table info(
    id serial primary key not null,
    name text not null,
    age int not null,
    bio text not null,
    picture text ,
    address text not null,
    contact text not null,
    place text not null,
    dev_id int not null,
    lender_id int not null
);

