DROP table IF exists `comments`;

CREATE TABLE IF NOT EXISTS `comments` (
	`commentID`	INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
	`productID`	TEXT NOT NULL ,
	`user`	TEXT,
	`comment`	TEXT,
	`rating`	INTEGER
	
);
