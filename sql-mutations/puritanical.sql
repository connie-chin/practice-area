delete from "films"
where "rating" != 'G'
returning *;

-- this fails because castmembers is dependent on actorsId from actors table. its a foreign key thats being referenced.
