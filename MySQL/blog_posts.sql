-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creation_date` datetime NOT NULL,
  `category` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `authors_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`),
  UNIQUE KEY `description_UNIQUE` (`description`),
  KEY `fk_posts_authors_idx` (`authors_id`),
  CONSTRAINT `fk_posts_authors` FOREIGN KEY (`authors_id`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Exploring JavaScript','An in-depth look at JavaScript and its features.','2022-06-01 00:00:00','Programming',1),(2,'A Guide to CSS Flexbox','Learn how to use CSS Flexbox for responsive layouts.','2021-01-04 00:00:00','Web Design',2),(3,'Understanding SQL Joins','A comprehensive guide to SQL joins with examples.','2024-05-14 00:00:00','Database',3),(4,'Introduction to Python','A beginner-friendly introduction to Python programming.','2024-01-12 00:00:00','Programming',4),(5,'Mastering Git','Advanced techniques for using Git version control.','2023-05-30 00:00:00','Version Control',5),(6,'Building REST APIs with Node.js','How to build scalable REST APIs using Node.js.','2020-04-04 00:00:00','Backend Development',6),(7,'Learning React','A guide to building user interfaces with React.','2022-07-14 00:00:00','Frontend Development',7),(8,'Responsive Web Design','Techniques and tools for creating responsive web designs.','2019-05-03 00:00:00','Web Design',8),(9,'Django for Beginners','Getting started with the Django web framework.','2024-02-05 00:00:00','Backend Development',9),(10,'Docker Essentials','An introduction to containerization with Docker.','2024-05-14 00:00:00','DevOps',10),(11,'Kubernetes Basics','Understanding Kubernetes for container orchestration.','2024-05-14 00:00:00','DevOps',1),(12,'Introduction to Machine Learning','Basic concepts and algorithms in machine learning.','2021-01-02 00:00:00','Data Science',2),(13,'Data Analysis with Pandas','Using the Pandas library for data analysis in Python.','2022-04-14 00:00:00','Data Science',3),(14,'GraphQL vs REST','Comparing GraphQL and REST APIs.','2020-05-25 00:00:00','Backend Development',4),(15,'Vue.js Fundamentals','Building interactive web applications with Vue.js.','2024-05-14 00:00:00','Frontend Development',5),(16,'Automating Tasks with Gulp','Using Gulp to automate web development tasks.','2018-05-14 00:00:00','Web Development',6),(17,'Understanding OAuth 2.0','A detailed look at the OAuth 2.0 authorization framework.','2024-04-14 00:00:00','Security',7),(18,'Building Static Sites with Jekyll','Creating static websites using Jekyll.','2024-03-14 00:00:00','Web Development',8),(19,'Introduction to TypeScript','Enhancing JavaScript with TypeScript.','2019-02-08 00:00:00','Programming',9),(20,'Web Performance Optimization','Techniques to optimize web performance.','2021-02-24 00:00:00','Web Development',10),(21,'Angular','Version 17, advanced','2020-05-29 00:00:00','Front',5),(26,'TypeScript','The best partner to program','2020-05-29 00:00:00','Front',5),(27,'Design web','You can learn to desing','2020-05-29 00:00:00','Front',2);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-15 22:47:26
