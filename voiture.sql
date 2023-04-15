-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 10 avr. 2023 à 20:52
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `voiture`
--

-- --------------------------------------------------------

--
-- Structure de la table `etat_locations`
--

CREATE TABLE `etat_locations` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etat_locations`
--

INSERT INTO `etat_locations` (`id`, `nom`) VALUES
(1, 'en attente'),
(2, 'confirm'),
(3, 'annule'),
(4, 'fini'),
(5, 'problem');

-- --------------------------------------------------------

--
-- Structure de la table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `duree` int(11) DEFAULT NULL,
  `date_debut` datetime DEFAULT NULL,
  `date_fin` datetime NOT NULL,
  `id_voiture` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `etat_location` int(11) DEFAULT NULL,
  `succursale_reture` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `locations`
--

INSERT INTO `locations` (`id`, `duree`, `date_debut`, `date_fin`, `id_voiture`, `id_user`, `etat_location`, `succursale_reture`) VALUES
(4, 10, '2023-03-19 00:00:00', '2023-03-29 00:00:00', 1, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `location_problem`
--

CREATE TABLE `location_problem` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `LocationId` int(11) NOT NULL,
  `ProblemLocationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `prix_locations`
--

CREATE TABLE `prix_locations` (
  `id` int(11) NOT NULL,
  `prix_par_jour` double NOT NULL,
  `prix_par_semain` double DEFAULT NULL,
  `prix_par_mois` double DEFAULT NULL,
  `prix_par_annee` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `prix_locations`
--

INSERT INTO `prix_locations` (`id`, `prix_par_jour`, `prix_par_semain`, `prix_par_mois`, `prix_par_annee`) VALUES
(1, 250, 1000, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `problem_locations`
--

CREATE TABLE `problem_locations` (
  `id` int(11) NOT NULL,
  `problem` varchar(255) NOT NULL,
  `frais` double DEFAULT NULL,
  `idlocation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `nom`) VALUES
(1, 'admin'),
(2, 'secretaire'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `succursales`
--

CREATE TABLE `succursales` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `Ville` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `succursales`
--

INSERT INTO `succursales` (`id`, `nom`, `description`, `Ville`) VALUES
(1, 'hicham cars', 'location de voiture a montreal chez hicham', 'montreal');

-- --------------------------------------------------------

--
-- Structure de la table `type_voitures`
--

CREATE TABLE `type_voitures` (
  `id` int(11) NOT NULL,
  `marque` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `type_voitures`
--

INSERT INTO `type_voitures` (`id`, `marque`, `model`, `description`) VALUES
(1, 'bmw', 'm4', 'voiture berline allemande');

-- --------------------------------------------------------

--
-- Structure de la table `userrole`
--

CREATE TABLE `userrole` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Userid` int(11) NOT NULL,
  `Roleid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `userrole`
--

INSERT INTO `userrole` (`createdAt`, `updatedAt`, `Userid`, `Roleid`) VALUES
('2023-03-14 16:27:35', '2023-03-14 16:27:35', 3, 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `naissance` datetime NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `prenom`, `nom`, `naissance`, `photo`, `telephone`, `email`, `mot_de_passe`) VALUES
(3, 'test', 'test', '1999-09-09 00:00:00', NULL, NULL, 'test@test.com', '$2a$10$oQF5oBlJW50tPo0ODtwj1u8qxu0pcdUZPMWcRs4GMgzBMQsRGDoM2');

-- --------------------------------------------------------

--
-- Structure de la table `voitures`
--

CREATE TABLE `voitures` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `annee` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `type_voiture` int(11) DEFAULT NULL,
  `succursale` int(11) DEFAULT NULL,
  `prix_location` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `voitures`
--

INSERT INTO `voitures` (`id`, `nom`, `annee`, `description`, `type_voiture`, `succursale`, `prix_location`) VALUES
(1, 'm4', 2021, 'voiture sport m4 coleur noir.', 1, 1, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etat_locations`
--
ALTER TABLE `etat_locations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_voiture` (`id_voiture`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `etat_location` (`etat_location`),
  ADD KEY `succursale_reture` (`succursale_reture`);

--
-- Index pour la table `location_problem`
--
ALTER TABLE `location_problem`
  ADD PRIMARY KEY (`LocationId`,`ProblemLocationId`),
  ADD KEY `ProblemLocationId` (`ProblemLocationId`);

--
-- Index pour la table `prix_locations`
--
ALTER TABLE `prix_locations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `problem_locations`
--
ALTER TABLE `problem_locations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `succursales`
--
ALTER TABLE `succursales`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type_voitures`
--
ALTER TABLE `type_voitures`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `userrole`
--
ALTER TABLE `userrole`
  ADD PRIMARY KEY (`Userid`,`Roleid`),
  ADD KEY `Roleid` (`Roleid`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `voitures`
--
ALTER TABLE `voitures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_voiture` (`type_voiture`),
  ADD KEY `succursale` (`succursale`),
  ADD KEY `prix_location` (`prix_location`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `etat_locations`
--
ALTER TABLE `etat_locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `prix_locations`
--
ALTER TABLE `prix_locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `problem_locations`
--
ALTER TABLE `problem_locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `succursales`
--
ALTER TABLE `succursales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `type_voitures`
--
ALTER TABLE `type_voitures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `voitures`
--
ALTER TABLE `voitures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`id_voiture`) REFERENCES `voitures` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `locations_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `locations_ibfk_3` FOREIGN KEY (`etat_location`) REFERENCES `etat_locations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `locations_ibfk_4` FOREIGN KEY (`succursale_reture`) REFERENCES `succursales` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `location_problem`
--
ALTER TABLE `location_problem`
  ADD CONSTRAINT `location_problem_ibfk_1` FOREIGN KEY (`LocationId`) REFERENCES `locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `location_problem_ibfk_2` FOREIGN KEY (`ProblemLocationId`) REFERENCES `problem_locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `userrole`
--
ALTER TABLE `userrole`
  ADD CONSTRAINT `userrole_ibfk_1` FOREIGN KEY (`Userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userrole_ibfk_2` FOREIGN KEY (`Roleid`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `voitures`
--
ALTER TABLE `voitures`
  ADD CONSTRAINT `voitures_ibfk_1` FOREIGN KEY (`type_voiture`) REFERENCES `type_voitures` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `voitures_ibfk_2` FOREIGN KEY (`succursale`) REFERENCES `succursales` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `voitures_ibfk_3` FOREIGN KEY (`prix_location`) REFERENCES `prix_locations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
