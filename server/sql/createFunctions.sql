create or replace function get_user(_id int)
    returns table (id int, email varchar(30)) language plpqsql
as $$
begin
    return query
        select * from users where id = _id;
end;$$