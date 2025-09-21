-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2025 at 09:59 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dubai_gold`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Gold Admin', 'admin@gold.com', '$2y$12$WZL/vxYrSKvkd4V4TZTXY.aIPGfCboF.iuWTr5bzZcuW634ZiLjQy', '2025-09-20 07:48:02', '2025-09-20 07:48:02'),
(2, 'Dubai Gold', 'dubai@gold.com', '123456', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `metals`
--

CREATE TABLE `metals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `serial_number` varchar(255) NOT NULL,
  `origin` varchar(255) NOT NULL,
  `production_date` date NOT NULL,
  `weight_type` varchar(255) NOT NULL,
  `weight` decimal(8,2) NOT NULL,
  `fine_weight` decimal(8,2) NOT NULL,
  `metal_type` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `metals`
--

INSERT INTO `metals` (`id`, `serial_number`, `origin`, `production_date`, `weight_type`, `weight`, `fine_weight`, `metal_type`, `username`, `created_at`, `updated_at`) VALUES
(1, '123', 'lahore', '2025-12-12', 'Kg', 1.00, 100.00, 'GOLD', 'irshad', '2025-09-20 12:57:34', '2025-09-20 12:57:34'),
(2, '124', 'lahore', '2025-12-12', 'Tola', 1.00, 100.00, 'GOLD', NULL, '2025-09-20 12:59:07', '2025-09-20 12:59:07'),
(3, '125', 'lahore', '2025-11-12', 'Kg', 1.00, 100.00, 'GOLD', NULL, '2025-09-20 13:09:12', '2025-09-20 13:09:12'),
(4, '126', 'lahore', '2025-12-12', 'Tola', 2.00, 90.00, 'SILVER', 'Ahmad', '2025-09-20 13:19:12', '2025-09-20 13:19:12'),
(5, '127', 'karachi', '2555-02-21', 'Kg', 1.00, 80.00, 'SILVER', NULL, '2025-09-20 13:20:40', '2025-09-20 13:20:40'),
(6, '128', 'karachi', '2022-12-12', 'Kg', 2.00, 20.00, 'GOLD', NULL, '2025-09-20 14:31:33', '2025-09-20 14:31:33'),
(7, '129', 'islamabad', '2025-12-12', 'Kg', 2.00, 20.00, 'GOLD', NULL, '2025-09-20 14:33:21', '2025-09-20 14:33:21'),
(8, '130', 'lahroe', '2023-02-11', 'Kg', 12.00, 100.00, 'GOLD', NULL, '2025-09-20 14:45:13', '2025-09-20 14:45:13');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_09_20_120845_create_admins_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(6, '2025_09_20_172052_create_metals_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\Admin', 1, 'admin-token', '407501e3104e4037afdf0aa9ce4e3b38e7fcea63c7cb00d8b5196f1f1c60e03f', '[\"*\"]', NULL, NULL, '2025-09-20 11:15:32', '2025-09-20 11:15:32'),
(2, 'App\\Models\\Admin', 1, 'admin-token', '8516a203ec902d70b3905b8c1516a8b32e56ac39e4aa7a8e40b1214ffb05d8e1', '[\"*\"]', NULL, NULL, '2025-09-20 11:31:10', '2025-09-20 11:31:10'),
(3, 'App\\Models\\Admin', 1, 'admin-token', '94f69a623ac6903187458441e9a60f24fa67ca2a074d40bc7a3911b0ac554972', '[\"*\"]', NULL, NULL, '2025-09-20 11:31:23', '2025-09-20 11:31:23'),
(4, 'App\\Models\\Admin', 1, 'admin-token', '8ee78f7e0c1560b0f0aabb90a7c14d3dc99aed4d6f5cb369d8c6c7ccb69bbac2', '[\"*\"]', NULL, NULL, '2025-09-20 11:32:08', '2025-09-20 11:32:08'),
(5, 'App\\Models\\Admin', 1, 'admin-token', '86a65af771a8b870b713acb1094ce080a4a001e00e5d3f5912781372ca3e816c', '[\"*\"]', NULL, NULL, '2025-09-20 11:40:03', '2025-09-20 11:40:03'),
(6, 'App\\Models\\Admin', 1, 'admin-token', 'c472a57596e9ef6bd499a834d86adac72f108bc21ad283b416817e1d5123b6a1', '[\"*\"]', NULL, NULL, '2025-09-20 11:48:26', '2025-09-20 11:48:26'),
(7, 'App\\Models\\Admin', 1, 'admin-token', 'b9f2c59544f7a68ef47b6355f70bacaf06a18ce7d205324f36ff5ee0de643c1f', '[\"*\"]', NULL, NULL, '2025-09-20 11:48:45', '2025-09-20 11:48:45'),
(8, 'App\\Models\\Admin', 1, 'admin-token', '60a2f55f686b8fd059319edb09b7bb2543c1faef7970d3a4060c6cb7b5c6f23d', '[\"*\"]', '2025-09-20 12:59:07', NULL, '2025-09-20 11:49:37', '2025-09-20 12:59:07'),
(9, 'App\\Models\\Admin', 1, 'admin-token', 'a6c6659dfab8dee0d3e301e84e2717b662a1263a6d46b7219f613447c10df05e', '[\"*\"]', NULL, NULL, '2025-09-20 11:50:18', '2025-09-20 11:50:18'),
(10, 'App\\Models\\Admin', 1, 'admin-token', '757ecbf28cb235fee84e97eafe244ad7bbbe6286513815ad791737449f176d26', '[\"*\"]', NULL, NULL, '2025-09-20 11:54:34', '2025-09-20 11:54:34'),
(11, 'App\\Models\\Admin', 1, 'admin-token', '9d7826a0d911dfa43a5a16a64977deec821b48c7a2affeade132b2c945d527ff', '[\"*\"]', NULL, NULL, '2025-09-20 12:02:15', '2025-09-20 12:02:15'),
(12, 'App\\Models\\Admin', 1, 'admin-token', '6de55d04c43a609505a16d03104346136045b2e68c62aba24b28bfbcb2a3cf79', '[\"*\"]', '2025-09-20 13:20:39', NULL, '2025-09-20 12:06:12', '2025-09-20 13:20:39'),
(13, 'App\\Models\\Admin', 1, 'admin-token', '7b94b3a64d59c666053e8f061318f9ff37bc57e391fa5c6ad4d93c3051ee89ed', '[\"*\"]', '2025-09-20 14:31:33', NULL, '2025-09-20 14:10:55', '2025-09-20 14:31:33'),
(14, 'App\\Models\\Admin', 1, 'admin-token', '7fc2721239c86ba497e2fd2c5d77a179867f3c1e1470daea945bb2d30dd5c597', '[\"*\"]', '2025-09-20 14:57:42', NULL, '2025-09-20 14:32:20', '2025-09-20 14:57:42');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('uT4UpDRXyU5P6i94vCHYC5LX5OnuBqgsDKHEEl79', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidXNMUW8yMGtzbFlXZ2Vma2xTWUFSbUJ5V1FqRGFrd2dSa0hXT2JESCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1758377701);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `metals`
--
ALTER TABLE `metals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `metals`
--
ALTER TABLE `metals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
