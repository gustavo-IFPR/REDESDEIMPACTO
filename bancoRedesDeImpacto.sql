-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
CREATE DATABASE IF NOT EXISTS redesDeImpacto;
USE redesDeImpacto;
-- Host: localhost    Database: redesdeimpacto
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `contato`
--

DROP TABLE IF EXISTS `contato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contato` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mensagem` text NOT NULL,
  `data_envio` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `negocios`
--

DROP TABLE IF EXISTS `negocios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `negocios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text,
  `cidade` text,
  `senha` varchar(45) DEFAULT NULL,
  `avatar` longblob,
  `email` text,
  `emailComercial` varchar(100) DEFAULT NULL,
  `celular` varchar(15) DEFAULT NULL,
  `site` varchar(255) DEFAULT NULL,
  `redeSocial` varchar(255) DEFAULT NULL,
  `ramos_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ramos_id` (`ramos_id`),
  CONSTRAINT `negocios_ibfk_1` FOREIGN KEY (`ramos_id`) REFERENCES `ramos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ramos`
--

DROP TABLE IF EXISTS `ramos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ramos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ramo` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'redesdeimpacto'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-05 14:56:52

INSERT INTO redesDeimpacto.ramos (nome)
VALUES
('Educação e Capacitação'),
('Saúde'),
('Meio Ambiente e Sustentabilidade'),
('Inclusão Social'),
('Empreendedorismo Comunitário'),
('Tecnologia para Impacto Social'),
('Arte e Cultura para Transformação Social'),
('Agricultura Sustentável'),
('Energia Renovável'),
('Habitação Social'),
('Assistência e Desenvolvimento Comunitário');