CREATE DATABASE users;
USE users;

CREATE TABLE `user` (
  `id`  INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `birthday` DATE NULL,
  `is_human` BOOLEAN NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO user (name, birthday, is_human)
VALUES ('Michel', '1985-06-06', true),
('Patrick', '1984-07-07', true),
('Guillaume', '1983-08-08', true),
('Hervé', '1982-08-13', true),
('Gwendo', '1996-02-24', true),
('Micheline', '1986-05-22', true),
('Miguel', '1995-10-03', true),
('Jean', '1982-02-16', true),
('Sophia', '1984-04-26', true),
('Josiane', '1992-03-19', true),
('Max', '1984-07-12', true);