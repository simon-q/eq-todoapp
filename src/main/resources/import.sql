INSERT INTO person
  (id, name)
VALUES
  (1, 'Alice'),
  (2, 'Bob'),
  (3, 'Joe');

INSERT INTO building
  (id, name)
VALUES
  (1, 'Burj Khalifa'),
  (2, 'Dubai Mall');

INSERT INTO task
  (id, text, person_id, building_id)
VALUES
  (1, 'some task', 1, 1),
  (2, 'another task', 1, null),
  (3, 'boring task', null, 2),
  (4, 'testing task', 2, null),
  (5, 'empty task', null, null);
