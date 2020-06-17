INSERT INTO person
  (id, name)
VALUES
  (1, 'Alice'),
  (2, 'Bob');

INSERT INTO building
  (id, name)
VALUES
  (1, 'Burj Khalifa');

INSERT INTO task
  (id, text, person_id, building_id)
VALUES
  (1, 'some task', 1, 1),
  (2, 'another task', null, null);
