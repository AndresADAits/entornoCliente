-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-02-2020 a las 16:32:55
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuariostiendademoviles`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasesdeusuario`
--

CREATE TABLE `clasesdeusuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clasesdeusuario`
--

INSERT INTO `clasesdeusuario` (`id`, `nombre`) VALUES
(1, 'Vendedor'),
(2, 'Supervisor'),
(3, 'Gerente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `controlacceso`
--

CREATE TABLE `controlacceso` (
  `horafecha` datetime NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `controlacceso`
--

INSERT INTO `controlacceso` (`horafecha`, `id`) VALUES
('2019-05-10 23:55:04', 1),
('2019-05-11 00:04:20', 1),
('2019-05-11 00:21:25', 3),
('2019-05-11 00:31:16', 3),
('2019-05-12 17:49:36', 1),
('2019-05-12 17:51:23', 1),
('2019-05-12 19:17:47', 1),
('2019-05-12 23:06:16', 1),
('2019-05-12 23:07:49', 1),
('2019-05-12 23:08:35', 1),
('2019-05-13 00:00:05', 1),
('2019-05-13 00:00:58', 1),
('2019-05-13 00:01:54', 1),
('2019-05-13 00:05:00', 1),
('2019-05-13 00:10:10', 1),
('2019-05-13 00:14:39', 1),
('2019-05-13 00:15:01', 2),
('2019-05-13 00:17:21', 2),
('2019-05-13 21:09:04', 1),
('2019-05-13 21:29:48', 2),
('2019-05-13 21:46:09', 2),
('2019-05-13 21:48:01', 2),
('2019-05-13 21:50:31', 2),
('2019-05-13 21:51:54', 2),
('2019-05-13 21:54:46', 2),
('2019-05-13 21:56:04', 2),
('2019-05-13 21:56:58', 2),
('2019-05-13 21:58:23', 1),
('2019-05-13 22:02:23', 3),
('2019-05-14 13:58:24', 1),
('2019-05-14 14:04:49', 2),
('2019-05-14 14:07:35', 2),
('2019-05-14 14:39:05', 2),
('2019-05-14 14:45:32', 2),
('2019-05-14 14:47:35', 2),
('2019-05-14 14:48:33', 2),
('2019-05-14 14:49:48', 2),
('2019-05-14 14:50:22', 2),
('2019-05-14 14:53:01', 2),
('2019-05-14 14:54:44', 2),
('2019-05-15 01:12:53', 1),
('2019-05-15 10:58:12', 2),
('2019-05-15 11:01:22', 2),
('2019-05-15 11:22:39', 2),
('2019-05-15 11:25:52', 2),
('2019-05-17 22:26:12', 1),
('2019-05-17 22:30:25', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `idmovil` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `marca` varchar(15) NOT NULL,
  `modelo` varchar(30) NOT NULL,
  `precio` int(11) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `pantalla` decimal(2,1) NOT NULL,
  `bateria` int(11) NOT NULL,
  `camara` int(2) NOT NULL,
  `oferta` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`idmovil`, `cantidad`, `marca`, `modelo`, `precio`, `capacidad`, `pantalla`, `bateria`, `camara`, `oferta`) VALUES
(1, 0, 'SAMSUNG', 'S10', 1183, 512, '6.4', 4100, 16, 0),
(2, 5, 'APPLE', 'XS_MAX', 1399, 256, '5.8', 4000, 12, 1),
(3, 300, 'XIAOMI', 'REDMI_NOTE7', 249, 64, '6.3', 4000, 48, 0),
(4, 300, 'HUAWEI', 'P20_LITE', 289, 64, '5.8', 3000, 16, 0),
(5, 200, 'HUAWEI', 'P30_PRO8', 949, 128, '6.2', 4000, 40, 0),
(6, 100, 'APPLE', 'IPHONE 8', 599, 64, '4.9', 3100, 8, 1),
(7, 156, 'XIAOMI', 'MI8_PRO', 519, 128, '6.9', 4300, 58, 0),
(8, 654, 'XIAOMI', 'MI9', 499, 128, '6.8', 4500, 56, 0),
(9, 20, 'HONOR', 'VIEW_20', 530, 128, '7.2', 4200, 51, 0),
(10, 910, 'HONOR', 'VIEW_10', 949, 128, '6.7', 3800, 38, 0),
(11, 140, 'SAMSUNG', 'GALAXY_NOTE9', 1099, 512, '9.9', 8000, 54, 0),
(12, 90, 'SAMSUNG', 'GALAXY_J3', 129, 16, '5.2', 1300, 8, 0),
(13, 209, 'SAMSUNG', 'GALAXY_M20', 229, 64, '6.2', 3200, 16, 0),
(14, 6, 'APPLE', 'IPHONE_5S', 139, 32, '4.9', 2800, 15, 1),
(15, 987, 'APPLE', 'IPHONE_7', 599, 64, '5.9', 3100, 18, 1),
(16, 87, 'APPLE', 'IPHONE_6S', 299, 32, '5.2', 2600, 16, 1),
(17, 87, 'BQ', 'AQUARIS_C', 119, 16, '5.2', 2600, 16, 0),
(18, 13, 'RAZER', 'PHONE_8', 499, 65, '6.7', 4200, 41, 0),
(19, 8, 'BQ', 'AQUARIS_X2', 389, 64, '6.8', 3600, 32, 0),
(20, 35, 'GOOGLE', 'PIXEL_XL', 274, 32, '6.2', 3700, 32, 0),
(21, 952, 'ZTE', 'BLADE_V580', 136, 32, '6.1', 3100, 14, 0),
(22, 741, 'BQ', 'AQUARIS', 109, 16, '5.2', 2600, 12, 0),
(23, 49, 'ZTE', 'BLADE_V8LITE', 84, 16, '4.8', 1800, 8, 0),
(24, 149, 'GOOGLE', 'NEXUS_5X', 172, 32, '5.2', 2800, 19, 0),
(25, 68, 'SONY', 'XPERIA_10', 345, 64, '6.8', 4200, 47, 0),
(26, 9, 'ASUS', 'ZENFONE_4', 223, 64, '5.9', 3800, 46, 0),
(27, 7, 'HISENSE', 'C30', 154, 16, '5.8', 3800, 15, 0),
(28, 2, 'LG', 'G4S', 245, 64, '5.8', 4200, 51, 0),
(29, 1, 'SONY', 'XPERIA_10PLUS', 784, 64, '6.8', 4800, 58, 0),
(31, 0, '', 'www', 2000, 0, '0.0', 2600, 0, 0),
(32, 0, 'CASEMIR', 'CHIWAKA', 1000, 128, '0.0', 2500, 0, 0),
(33, 0, 'GIOVANI', 'GIORGIO', 22000, 200, '0.0', 0, 0, 0),
(34, 0, 'FULGENCIO', 'BATISTA', 2000, 200, '0.0', 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `last_session` datetime DEFAULT current_timestamp(),
  `id_tipo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `usuario`, `password`, `nombre`, `correo`, `last_session`, `id_tipo`) VALUES
(1, 'GERENTE', '223ef7f245391afcdedaeeb5ea6813521a801ac3', 'GERENTE', 'GERENTE@GMAIL.COM', '2020-01-19 15:16:06', 3),
(2, 'VENDEDOR', 'f84ae4782a61dc97f19accb967656c3225743d3a', 'VENDEDOR', 'VENDEDOR@GMAIL.COM', '2020-01-19 15:16:06', 1),
(3, 'SUPERVISOR', '0e93ff77222be059b241f06449888d5df275c426', 'SUPERVISOR', 'SUPERVISOR@GMAIL.COM', '2020-01-19 15:16:06', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clasesdeusuario`
--
ALTER TABLE `clasesdeusuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`idmovil`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clasesdeusuario`
--
ALTER TABLE `clasesdeusuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `idmovil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
