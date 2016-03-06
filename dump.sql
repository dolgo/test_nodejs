
CREATE SCHEMA `test_store` DEFAULT CHARACTER SET utf8;

CREATE TABLE `test_store`.`messages` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NULL,
  `likes_count` INT(11) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`));

INSERT INTO `test_store`.`messages` (`name`, `description`, `likes_count`) VALUES
  ('test name 1', 'test description 1', 1),
  ('test name 2', 'test description 2', 2),
  ('test name 3', 'test description 3', 3),
  ('test name 4', 'test description 4', 4),
  ('test name 5', 'test description 5', 5),
  ('test name 6', 'test description 6', 6),
  ('test name 7', 'test description 7', 7),
  ('test name 8', 'test description 8', 8),
  ('test name 9', 'test description 9', 9),
  ('test name 10', 'test description 10', 10),
  ('test name 11', 'test description 11', 11);