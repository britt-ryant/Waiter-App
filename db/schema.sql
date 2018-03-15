\c menu_db;

DROP TABLE IF EXISTS menu_items;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(255),
  user_password VARCHAR(255)
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  cost integer default 0,
  course integer default 0,
  name VARCHAR(255),
  description VARCHAR(255)
);
--
-- CREATE TABLE allergies (
--   id SERIAL PRIMARY KEY,
--   description VARCHAR(255),
-- )
