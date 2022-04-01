create or replace function get_user(_email varchar(30), _password varchar(30))
    returns table (email varchar(30), pass varchar(30), role roles) language plpgsql
as $$
begin
    return query
        select * from users where users.email = _email and users.password = _password;
end;$$
