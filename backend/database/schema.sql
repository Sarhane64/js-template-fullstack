CREATE TABLE categories (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  category_type VARCHAR(255) NOT NULL
);

CREATE TABLE offre (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  img VARCHAR(360),
  prix INT,
  resumes VARCHAR(300),
  adresse VARCHAR(255),
  pro TINYINT(1),
  category_id INT UNSIGNED,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);


INSERT INTO categories (category_type) VALUES
('Maison'),
('Appartement'),
('Terrains'),
('Garage');
-- Insertion des données dans la table "offre"
INSERT INTO offre (title, img, prix, resumes, adresse, pro, category_id) VALUES
("Appartement Confortable", "https://img.paruvendu.fr/media_ext/photos.ubiflow.net/8a/37/LzQ0MDQxNC80MDExMDA2NjkvcGhvdG9zLzEuanBnPzIwMjMxMDE1MDk1ODE1_rct?func=crop&w=1000&gravity=auto", 280000, "Appartement confortable dans un quartier calme. Deux chambres, une cuisine entièrement équipée et un balcon offrant une vue magnifique sur les environs verdoyants. À proximité des transports en commun et des commodités.", "101 Rue du Bonheur, 59000 Lille, France", NULL, 1),
("Maison moderne", "https://media.paruvendu.fr/media_ext/_https_/media.paruvendu.fr/2b/ea/L21lZGlhX3ByZy9BRExOMjI2L3ByZ19waG90XzBfcF81NTk1NjQwXzdhNmVlNWQxOWI1MmI5ZDY5ZGM4ZTMzMzVlZGM2YjdmN2RhZWMyMzNhOTU5YjJjYWZhYzhjNzlmODdjOTE2ODkxNjk4MTM5MDAtanBnPzIwMjMtMTAtMTYgMDc6MDA6MjYuODgw_sizecrop_1000x1000?2023101610", 720000, "Maison moderne avec piscine et vue sur la mer. Quatre chambres spacieuses, un salon élégant et une cuisine design. Profitez du style de vie méditerranéen dans cette magnifique propriété.", "555 Chemin de la Mer, 06000 Nice, France", true, 2),
("Appartement moderne", "https://img.paruvendu.fr/media_ext/_https_/media.paruvendu.fr/3d/42/L21lZGlhLXBhL1dJMTcvMS85L1dJMTcxOTk4MjA5XzEuanBlZz8yMDIzMTAwODE5NTE1Ng_rct?func=crop&w=1000&gravity=auto", 380000, "Appartement récemment rénové dans un quartier animé. Trois chambres lumineuses, une cuisine moderne et un salon confortable. Idéal pour les jeunes professionnels et les familles.", "222 Boulevard des Arts, 44000 Nantes, France", true, 2),
("Villa Spacieuse", "https://img.paruvendu.fr/media_ext/photos.ubiflow.net/40/3a/LzM0MDM2OS8zOTY5MzUzODEvcGhvdG9zLzEuanBnPzIwMjMxMDEyMDUwNTEy_rct?func=crop&w=1000&gravity=auto", 520000, "Villa spacieuse avec jardin paysager. Cinq chambres élégantes, un grand salon et une cuisine entièrement équipée. Profitez d'une intimité totale dans ce havre de paix situé à proximité des commodités.", "777 Avenue de la Tranquillité, 25000 Besançon, France", true, 1);

INSERT INTO offre (title, img, prix, resumes, adresse, pro, category_id) VALUES
("Maison de Campagne", "https://img.paruvendu.fr/media_ext/photos.ubiflow.net/bc/49/LzM0MDM2OS8zODY3NjM3NDAvcGhvdG9zLzEuanBnPzIwMjMxMDE2MDAwMzIy_rct?func=crop&w=1000&gravity=auto", 350000, "Charmante maison de campagne avec jardin spacieux et vue imprenable sur les collines environnantes. La propriété comprend quatre chambres, deux salles de bains et une cuisine entièrement équipée. Parfait pour les amoureux de la nature et de la tranquillité.", "123 Rue de la Campagne, 75000 Paris, France", 1, 1),
("Appartement Lumineux", "https://img.paruvendu.fr/media_ext/_https_/media.apimo.pro/c5/ab/L3BpY3R1cmUvODM0MDcvODM0MDY2MjgvNTI1NzE4MTI1NjUxZWMxM2FhM2YwZTcuNTI1NTEyMzhfNDBhYjY1ZWI1MF8xOTIwLndlYnAtb3JpZ2luYWwuanBnPzE2OTY1MTQzNjImMjAyMzEwMTQwMDI4NTg_rct?func=crop&w=1000&gravity=auto", 620000, "Appartement lumineux avec vue panoramique sur la ville. Il dispose de trois chambres spacieuses, d'une cuisine moderne et d'un salon ouvert. Situé dans un quartier animé avec des boutiques et des restaurants à proximité.", "456 Avenue du Soleil, 69000 Lyon, France", NULL, 2),
("Maison Spacieuse", "https://img.paruvendu.fr/media_ext/_https_/www.human-immobilier.fr/10/99/L2ltYWdlcy84NS0yNDAwXzAxMDYyMzA2NTMwMi5qcGc_MjAyMzEwMTUwODA1MTA_rct?func=crop&w=1000&gravity=auto", 450000, "Spacieuse maison de ville rénovée avec un charmant jardin privé. La maison dispose de cinq chambres, d'un grand salon et d'une salle à manger élégante. Idéalement située près des écoles et des parcs.", "789 Rue de la Paix, 33000 Bordeaux, France", NULL, 3);
-- Ajoutez d'autres enregistrements de données de la même manière
