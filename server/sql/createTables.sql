create type roles as enum ('admin', 'user');
create table users
(
    email varchar(100) primary key,
    password varchar(100),
    role roles
);
insert into users values ('admin1', '0926ed8c360c48bfcff736df5228082f', 'admin');

