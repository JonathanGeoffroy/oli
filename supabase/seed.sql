create table todo (
    id serial primary key,
    title text not null,
    description text,
    user_id uuid not null
);

alter table todo 
    add constraint user_fk
    foreign key (user_id)
    references users.id
    on delete cascade;

alter table todo enable row level security;

create policy "Individuals can view their own todos." 
    on todo 
    for all
    using ((select auth.uid()) = user_id);