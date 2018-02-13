DROP DATABASE IF EXISTS LAL;
CREATE DATABASE LAL;
USE LAL;
DROP TABLE IF EXISTS `USER_PROFILE`;

CREATE TABLE `USER_PROFILE` (
  `ID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL,
  `SALARY` double DEFAULT NULL,
  PRIMARY KEY (`ID`)
);

LOCK TABLES `USER_PROFILE` WRITE;
INSERT INTO `USER_PROFILE` (`ID`, `NAME`, `SALARY`)
VALUES (1,'User A',100), (2,'User B',200);