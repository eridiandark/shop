create or replace type roles as enum ('admin', 'user');

create or replace table users
(
    id serial primary key,
    email varchar(30) unique,
    password varchar(30),
    role roles
);

/*create or replace function add_user(email varchar(30), password varchar(30), user_role role)
returns table (id int, email varchar(30)) language plpqsql
as $$
begin
return query

end;$$*/


