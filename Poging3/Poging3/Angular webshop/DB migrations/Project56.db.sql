DROP table IF exists `Users`;
CREATE TABLE IF NOT EXISTS `Users` (
	`UserId`	INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`Password`	TEXT,
	`Username`	TEXT
);
INSERT INTO `Users` VALUES (1,'Shane69','Shane');
INSERT INTO `Users` VALUES (2,'Khanh69','Khanh');

DROP table IF exists `Products`;

CREATE TABLE IF NOT EXISTS `Products` (
	`productID`	INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
	`productName`	TEXT NOT NULL ,
	`productPrice`	FLOAT,
	`productStock`	INTEGER,
	`productCategory`	TEXT,
	`productTag`	TEXT
);
INSERT INTO `Products` VALUES (1,'Purple D6','0.49',6,'Dice','D6');
INSERT INTO `Products` VALUES (2,'Pink D20','0.49',666,'Dice','D20');
INSERT INTO `Products` VALUES (3,'Dungeon Master''s Guide','49.95',7,'Book','Guide');
INSERT INTO `Products` VALUES (4,'Player''s Handbook','36.99',2,'Book','Guide');
INSERT INTO `Products` VALUES (5,'Monster Manual','36.99',4,'Book','Guide');
INSERT INTO `Products` VALUES (6,'Starter Set','20.99',5,'Book','Guide');
INSERT INTO `Products` VALUES (7,'Dungeon Master''s Screen Reincarnated','16.99',2,'Accessory','Accessory');
INSERT INTO `Products` VALUES (8,'Pink D6','0.49',7,'Dice','D6');
INSERT INTO `Products` VALUES (9,'Blue D6','0.49',8,'Dice','D6');
INSERT INTO `Products` VALUES (10,'Red D6','0.49',4,'Dice','D6');
INSERT INTO `Products` VALUES (11,'Black D6','0.49',2,'Dice','D6');
INSERT INTO `Products` VALUES (12,'White D6','0.49',12,'Dice','D6');
INSERT INTO `Products` VALUES (13,'Purple D4','0.49',16,'Dice','D4');
INSERT INTO `Products` VALUES (14,'Pink D4','0.49',23,'Dice','D4');
INSERT INTO `Products` VALUES (15,'Blue D4','0.49',13,'Dice','D4');
INSERT INTO `Products` VALUES (16,'Red D4','0.49',33,'Dice','D4');
INSERT INTO `Products` VALUES (17,'Black D4','0.49',25,'Dice','D4');
INSERT INTO `Products` VALUES (18,'White D4','0.49',12,'Dice','D4');
INSERT INTO `Products` VALUES (19,'Purple D10','0.49',4,'Dice','D10');
INSERT INTO `Products` VALUES (20,'Pink D10','0.49',3,'Dice','D10');
INSERT INTO `Products` VALUES (21,'Blue D10','0.49',6,'Dice','D10');
INSERT INTO `Products` VALUES (22,'Red D10','0.49',2,'Dice','D10');
INSERT INTO `Products` VALUES (23,'Black D10','0.49',0,'Dice','D10');
INSERT INTO `Products` VALUES (24,'White D10','0.49',7,'Dice','D10');
INSERT INTO `Products` VALUES (25,'Purple D12','0.49',8,'Dice','D12');
INSERT INTO `Products` VALUES (26,'Pink D12','0.49',0,'Dice','D12');
INSERT INTO `Products` VALUES (27,'Blue D12','0.49',2,'Dice','D12');
INSERT INTO `Products` VALUES (28,'Red D12','0.49',3,'Dice','D12');
INSERT INTO `Products` VALUES (29,'Black D12','0.49',4,'Dice','D12');
INSERT INTO `Products` VALUES (30,'White D12','0.49',1,'Dice','D12');
INSERT INTO `Products` VALUES (31,'Purple D20','0.49',5,'Dice','D20');
INSERT INTO `Products` VALUES (32,'Blue D20','0.49',6,'Dice','D20');
INSERT INTO `Products` VALUES (33,'Red D20','0.49',12,'Dice','D20');
INSERT INTO `Products` VALUES (34,'Black D20','0.49',3,'Dice','D20');
INSERT INTO `Products` VALUES (35,'White D20','0.49',13,'Dice','D20');
INSERT INTO `Products` VALUES (36,'Purple D100','0.49',18,'Dice','D100');
INSERT INTO `Products` VALUES (37,'Pink D100','0.49',21,'Dice','D100');
INSERT INTO `Products` VALUES (38,'Blue D100','0.49',2,'Dice','D100');
INSERT INTO `Products` VALUES (39,'Red D100','0.49',3,'Dice','D100');
INSERT INTO `Products` VALUES (40,'Black D100','0.49',5,'Dice','D100');
INSERT INTO `Products` VALUES (41,'White D100','0.49',8,'Dice','D100');
INSERT INTO `Products` VALUES (42,'Dungeons & Dragons Castle Ravenloft','59.95',2,'Extra','Board Game');
INSERT INTO `Products` VALUES (43,'Dungeons & Dragons Wrath of Ashardalon','59.95',4,'Extra','Board Game');
INSERT INTO `Products` VALUES (44,'Princes of the Apocalypse','49.99',3,'Book','Adventure');
INSERT INTO `Products` VALUES (45,'Hoard of the Dragon Queen','23.99',0,'Book','Adventure');
INSERT INTO `Products` VALUES (46,'The Rise of Tiamat','29.95',1,'Book','Adventure');
INSERT INTO `Products` VALUES (47,'Icons of the Realms: Tomb of Annihilation','15.99',2,'Miniatures','Set');
INSERT INTO `Products` VALUES (48,'Icons of the Realms: Classic Creatures Box Set','79.99',9,'Miniatures','Set');
INSERT INTO `Products` VALUES (49,'Icons of the Realm: Monster Menagerie II','15.99',2,'Miniatures','Set');
INSERT INTO `Products` VALUES (50,'Icons of the Realm: Storm King''s Thunder','16.99',0,'Miniatures','Set');
INSERT INTO `Products` VALUES (51,'Icons of the Realm: Monster Menagerie','15.99',1,'Miniatures','Set');
INSERT INTO `Products` VALUES (52,'Rage of Demons: Booster','15.99',3,'Miniatures','Set');
INSERT INTO `Products` VALUES (53,'Elemental Evil: Booster','15.99',2,'Miniatures','Set');
INSERT INTO `Products` VALUES (54,'Icons of the Realms: Tiamat','59.99',0,'Miniatures','Single');
INSERT INTO `Products` VALUES (55,'Icons of the Realms: Bahamut','59.99',0,'Miniatures','Single');
INSERT INTO `Products` VALUES (56,'Icons of the Realms: Booster','15.99',3,'Miniatures','Set');
INSERT INTO `Products` VALUES (57,'Icons of the Realms: Starter Set','19.99',2,'Miniatures','Set');
INSERT INTO `Products` VALUES (58,'Xanathar''s Guide To Everything','49.95',6,'Miniatures','Set');
INSERT INTO `Products` VALUES (59,'Dungeon Tiles Reincarnated','24.99',0,'Extra','Map');
INSERT INTO `Products` VALUES (60,'D&D Adventure Grid','24.95',1,'Extra','Map');
INSERT INTO `Products` VALUES (61,'Tomb of Annihilation Board Game','79.99',2,'Extra','Board Game');
INSERT INTO `Products` VALUES (62,'Tomb of Annihilation Dice','19.95',3,'Dice','Set');
INSERT INTO `Products` VALUES (63,'Tomb of Annihilation','49.95',6,'Book','Adventure');
INSERT INTO `Products` VALUES (64,'D&D Character Sheets','9.95',13,'Extra','Character');
INSERT INTO `Products` VALUES (65,'Tales from the Yawning Portal','49.95',8,'Book','Adventure');
INSERT INTO `Products` VALUES (66,'Volo''s Guide to Monsters','49.95',0,'Book','Guide');
INSERT INTO `Products` VALUES (67,'Storm King''s Thunder','49.95',2,'Book','Adventure');
INSERT INTO `Products` VALUES (68,'Curse of Strahd','49.95',3,'Book','Adventure');
INSERT INTO `Products` VALUES (69,'Tarokka Deck','10.00',2,'Extra','Adventure');
INSERT INTO `Products` VALUES (70,'Dragonfire','59.99',0,'Extra','Board Game');
INSERT INTO `Products` VALUES (71,'Out of the Abyss','49.95',9,'Book','Adventure');
INSERT INTO `Products` VALUES (72,'Temple of Elemental Evil','64.99',1,'Extra','Board Game');

