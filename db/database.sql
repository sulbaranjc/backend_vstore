CREATE DATABASE IF NOT EXISTS images;
use images;
DROP TABLE IF EXISTS image;
CREATE TABLE IF NOT EXISTS image(
id int not null auto_increment primary key,
type varchar(200),
name varchar(200),
data longblob
);
select * from image;


