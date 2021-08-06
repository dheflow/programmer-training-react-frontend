-- MySQL dump 10.13  Distrib 8.0.26, for macos11.3 (x86_64)
--
-- Host: localhost    Database: DB_Rental
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_brand`
--

DROP TABLE IF EXISTS `tb_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_brand` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_brand`
--

LOCK TABLES `tb_brand` WRITE;
/*!40000 ALTER TABLE `tb_brand` DISABLE KEYS */;
INSERT INTO `tb_brand` VALUES (1,'Yamaha','Yamaha Jupiter X');
/*!40000 ALTER TABLE `tb_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_customer`
--

DROP TABLE IF EXISTS `tb_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_customer` (
  `id` int NOT NULL,
  `id_number` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `handphone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_customer`
--

LOCK TABLES `tb_customer` WRITE;
/*!40000 ALTER TABLE `tb_customer` DISABLE KEYS */;
INSERT INTO `tb_customer` VALUES (1,'1','Eko','08212288384','Jl. Tirta Kencana','073224163','eko@gmail.com'),(2,'135064799','Tri Hariyanto','081316601479','Sambirejo','081316601479','tri@gmail.com');
/*!40000 ALTER TABLE `tb_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_motor`
--

DROP TABLE IF EXISTS `tb_motor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_motor` (
  `id` int NOT NULL,
  `police_number` varchar(255) DEFAULT NULL,
  `vehicle_type_id` int DEFAULT NULL,
  `year_build` int DEFAULT NULL,
  `year_operated` int DEFAULT NULL,
  `fuel_type` varchar(255) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vehicle_type_id_idx` (`vehicle_type_id`),
  CONSTRAINT `fk_vehicle_type_id` FOREIGN KEY (`vehicle_type_id`) REFERENCES `tb_vehicle_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_motor`
--

LOCK TABLES `tb_motor` WRITE;
/*!40000 ALTER TABLE `tb_motor` DISABLE KEYS */;
INSERT INTO `tb_motor` VALUES (1,'BD 2021 SE',1,2012,2013,'2LT','Eko Purnomo'),(2,'BD 6523 BK',1,2018,2018,'4LT','Tri Hariyanto'),(3,'BD 8218 GE(MIO)',2,2019,2020,'3LT','Anggi Dwi Mardian');
/*!40000 ALTER TABLE `tb_motor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_rental`
--

DROP TABLE IF EXISTS `tb_rental`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_rental` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `transaction_number` varchar(255) DEFAULT NULL,
  `transaction_date` datetime DEFAULT NULL,
  `users_id` smallint unsigned DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `motor_id` int DEFAULT NULL,
  `rent_duration` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_customer_id_idx` (`customer_id`),
  KEY `fk_motor_id_idx` (`motor_id`),
  KEY `fk_user_id_idx` (`users_id`),
  CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `tb_customer` (`id`),
  CONSTRAINT `fk_motor_id` FOREIGN KEY (`motor_id`) REFERENCES `tb_motor` (`id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`users_id`) REFERENCES `tb_users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_rental`
--

LOCK TABLES `tb_rental` WRITE;
/*!40000 ALTER TABLE `tb_rental` DISABLE KEYS */;
INSERT INTO `tb_rental` VALUES (27,'trx_0001','2020-12-12 00:00:00',4,1,1,12,12),(28,'trx_0002','2020-12-12 00:00:00',5,1,1,12,12),(29,'trx_0003','2020-12-12 00:00:00',10,1,1,1,12),(30,'trx_0004','2020-12-22 00:00:00',7,1,1,12,123),(31,'trx_0005','2020-12-23 00:00:00',5,1,1,123,123456),(32,'trx_0006','2020-12-12 00:00:00',4,1,1,123,12345),(33,'trx_0007','2020-12-07 00:00:00',3,1,1,12,20000),(34,'trx_0008','2020-10-10 00:00:00',10,1,1,60,30),(35,'trx_0009','2021-01-01 00:00:00',5,2,2,22,85423),(36,'trx_0010','2019-10-10 00:00:00',7,2,2,1,19191),(37,'trx_0011','2019-08-19 00:00:00',10,2,3,23,10000),(38,'trx_0012','2019-12-22 00:00:00',6,1,3,12,123456),(39,'trx_0013','2020-12-12 00:00:00',4,2,3,12,56432),(40,'trx_0014','2021-09-21 00:00:00',3,2,3,5,100000);
/*!40000 ALTER TABLE `tb_rental` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_users`
--

DROP TABLE IF EXISTS `tb_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_users` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_users`
--

LOCK TABLES `tb_users` WRITE;
/*!40000 ALTER TABLE `tb_users` DISABLE KEYS */;
INSERT INTO `tb_users` VALUES (2,'trih','trih@gmail.com','tri123','pass123'),(3,'anggi','anggi@gmail.com','anggi123','pass123'),(4,'satria','satria@gmail.com','isat','isat123'),(5,'asd','asd','wwww','qwe'),(6,'asd','asd','wwww','qwe'),(7,'jaka','jaka','jaka123','jakapass'),(8,'','','',''),(9,'','','',''),(10,'Anggi busuk','ANGGiBusukSekali@gmail.com','anggi69','anggi69'),(11,'','','',''),(12,'','','','');
/*!40000 ALTER TABLE `tb_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_vehicle_type`
--

DROP TABLE IF EXISTS `tb_vehicle_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_vehicle_type` (
  `id` int NOT NULL,
  `brand_id` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` text,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_brand_id_idx` (`brand_id`),
  CONSTRAINT `fk_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `tb_brand` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_vehicle_type`
--

LOCK TABLES `tb_vehicle_type` WRITE;
/*!40000 ALTER TABLE `tb_vehicle_type` DISABLE KEYS */;
INSERT INTO `tb_vehicle_type` VALUES (1,1,'Jupiter','test123',20000000),(2,1,'Mio','test123',15000000);
/*!40000 ALTER TABLE `tb_vehicle_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-06 13:44:33
