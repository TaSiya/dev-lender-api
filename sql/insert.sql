insert into users (name) values ('Siyanda');
insert into users (name) values ('Anitha');
insert into users (name) values ('Monde');
insert into users (name) values ('Phindi');

insert into details 
( age, passwords, email, bio, address, contact, position, rating, name_id) 
values
(24,1234,'siya@gmail.com','bio goes here','M19 Bonkolo Drive',0635163949,'lender', 4,1);

insert into details 
( age, passwords, email, bio, address, contact, position, rating, name_id) 
values 
(27,1234,'anitha@gmail.com',
'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
'54678 Litha park Khayelitsha 7784',
076495866,
'developer', 2,2);

insert into details 
( age, passwords, email, bio, address, contact, position, rating, name_id) 
values
(31,1234,'monde@yahoo.com',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem leo, elementum in venenatis sed, volutpat sed massa. Proin a bibendum odio. Sed interdum felis et velit feugiat, ut finibus sapien vestibulum. Donec id ultricies nunc, et molestie libero. Nunc accumsan porta tellus, elementum bibendum tellus porta ac. Ut sit amet tellus posuere, ullamcorper urna quis, gravida velit. Duis mattis ullamcorper ipsum, eu rutrum dolor imperdiet malesuada.',
'5457 Sea point Cape Town',
0635163949,'lender', 5,3);

insert into details 
( age, passwords, email, bio, address, contact, position, rating, name_id) 
values
(18,1234,'phindi@yahoo.com',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem leo, elementum in venenatis sed, volutpat sed massa. Proin a bibendum odio. Sed interdum felis et velit feugiat, ut finibus sapien vestibulum. Donec id ultricies nunc, et molestie libero. Nunc accumsan porta tellus, elementum bibendum tellus porta ac. Ut sit amet tellus posuere, ullamcorper urna quis, gravida velit. Duis mattis ullamcorper ipsum, eu rutrum dolor imperdiet malesuada.',
'NY3457 Gugulethu Cape Town',
0734659860,'developer', 3,4);



insert into monies (loan, deposit, capital, amount_left, loaned, detail_id) values (0,10000,0,10000,0,1);
insert into monies (loan, deposit, capital, amount_left, loaned, detail_id) values (400,0,50000,49600,0,2);
insert into monies (loan, deposit, capital, amount_left, loaned, detail_id) values (0,100000,0,80000,20000,3);
insert into monies (loan, deposit, capital, amount_left, loaned, detail_id) values (5000,0,10000,5000,0,4);