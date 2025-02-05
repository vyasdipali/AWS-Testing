-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: lms-vyasdipali1164-a1de.k.aivencloud.com    Database: defaultdb
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `Demo`
--

DROP TABLE IF EXISTS `Demo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Demo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dueDate` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Demo`
--

LOCK TABLES `Demo` WRITE;
/*!40000 ALTER TABLE `Demo` DISABLE KEYS */;
INSERT INTO `Demo` VALUES (1,'AAA','AAA','2025-01-04 00:00:00.000','2025-01-02 08:57:11.556','2025-01-02 08:57:11.556'),(2,'Hello Second','Hello Second','2025-01-04 00:00:00.000','2025-01-02 08:57:24.918','2025-01-02 08:57:24.918');
/*!40000 ALTER TABLE `Demo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Todo`
--

DROP TABLE IF EXISTS `Todo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Todo` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `isComplete` tinyint(1) NOT NULL DEFAULT '0',
  `dueDate` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Todo`
--

LOCK TABLES `Todo` WRITE;
/*!40000 ALTER TABLE `Todo` DISABLE KEYS */;
INSERT INTO `Todo` VALUES ('cm5deax5y0003vhz8w544srfx','Testing Todo','Testing Todo',0,'2025-01-03 00:00:00.000','2025-01-01 04:26:46.245','2025-01-01 04:57:26.232','Add'),('cm5deb6630004vhz8jhpz8570','Add','Add Dec',0,'2025-01-04 00:00:00.000','2025-01-01 04:26:57.916','2025-01-01 04:26:58.000',NULL),('cm5debhcf0005vhz82zb06txm','Todo','Todo',0,'2025-01-05 00:00:00.000','2025-01-01 04:27:12.320','2025-01-01 04:27:12.000',NULL),('cm5debs0f0006vhz8fvndasvo','Hello','Hello Todo List',0,'2025-01-04 00:00:00.000','2025-01-01 04:27:26.223','2025-01-01 04:27:26.000',NULL);
/*!40000 ALTER TABLE `Todo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-02 15:20:07
