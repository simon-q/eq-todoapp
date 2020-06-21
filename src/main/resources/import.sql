INSERT INTO person
  (name)
VALUES
  ('Alice'),
  ('Bob'),
  ('Joe');

INSERT INTO building
  (name)
VALUES
  ('Burj Khalifa'),
  ('Dubai Mall');

INSERT INTO task
  (text, created_at, updated_at)
VALUES
  ('some task', NOW(), NOW()),
  ('another task', NOW(), NOW()),
  ('boring task', NOW(), NOW()),
  ('testing task asdwasd afsawd asf asd faas daw asf asd wad sf asd wads dsa fd sadwad sadwaf asdwadsad', NOW(), NOW()),
  ('empty task', NOW(), NOW());

UPDATE task SET
  person_id = (SELECT id FROM person WHERE name = 'Alice'),
  building_id = (SELECT id FROM building WHERE name = 'Burj Khalifa')
WHERE text = 'some task';

UPDATE task SET
  person_id = (SELECT id FROM person WHERE name = 'Alice')
WHERE text = 'another task';

UPDATE task SET
  building_id = (SELECT id FROM building WHERE name = 'Dubai Mall')
WHERE text = 'boring task';

UPDATE task SET
  person_id = (SELECT id FROM person WHERE name = 'Bob')
WHERE text LIKE '%testing task%';
