CREATE DATABASE MayaFood;
USE MayaFood;

ALTER DATABASE MayaFood CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE users (
	username VARCHAR(45) NOT NULL,
    contrasenia VARCHAR(45) NOT NULL,
    CONSTRAINT PK_USERS PRIMARY KEY (username)
);

CREATE TABLE post (
  id INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  ingredientes TEXT NOT NULL,
  contenido TEXT NOT NULL,
  alt_img TEXT,
  username VARCHAR(45) NOT NULL,
  CONSTRAINT  PK_ENTRADA_BLOG PRIMARY KEY (id),
  CONSTRAINT FK_TO_USERS FOREIGN KEY(username) REFERENCES users(username)
);

ALTER TABLE users CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;
ALTER TABLE post CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;

INSERT INTO users VALUES ('admin', PASSWORD('admin123'));
INSERT INTO post ( titulo, ingredientes, contenido, username ) VALUES (  'Tortillas',
																		'Maíz, Cal y Agua',
																		'Las tortillas sin duda son fundamentales en la gastronomía guatemalteca. Se acostumbra acompañar todas las comidas con dicho platillo y son muy fáciles de preparar.',
																		'admin'),
                                                                       (  'Tamalitos',
																		'1 libra y media de masa de maíz, 4 cucharadas de mantequilla, 2 cucharadas de aceite para freír y sal.',
																		'Sin duda que no puedes visitar Guatemala sin dejar de degustar los deliciosos tamales. El platillo es preparado para todo tipo de ocasiones y son acompañados de limón. Su receta es artesanal y los ingredientes 100% locales.',
																		'admin'),
                                                                        (  'Elotes cocidos',
																		'6 elotes, 2 litros de agua, 6 cucharaditas de margarina sin sal, La Villita, 1 taza de mayonesa, 1 taza de queso panela, La Villita, rallado',
																		'Los elotes son consumidos por los guatemaltecos en distintas presentaciones. Son ideales para degustar del sabor del maíz en distintas presentaciones. Los elotes cocidos y asados suelen estar acompañados de limón con sal. Los elotes locos son servidos con mayonesa, salsa de tomate, mostaza y picante.',
																		'admin'),
                                                                        (  'Paches',
																		'1 libra y media de masa de maíz, 8 onzas de manteca de marrano, 1 maleta de hojas de plátano, 2 maletas de hojas de maxán, 1 libra y media de tomate ciruelo maduro, 2 chiles pimientos, 3 chiles guaques, 2 onzas de ajonjolí, 2 onzas de pepitoria, 1 raja pequeña de canela, 1 onza de manteca de cerdo, Achiote y Sal.',
																		'Sin duda que no puedes visitar Guatemala sin dejar de degustar los deliciosos tamales. El platillo es preparado para todo tipo de ocasiones y son acompañados de limón. Su receta es artesanal y los ingredientes 100% locales.',
																		'admin'),
                                                                        (  'Tostadas',
																		'Tortillas delgadas para freír o bien, las tostadas que venden en el supermercado, Aceite de oliva, Perejil, Queso seco rayado, Cebolla en rodajas finas, Sal, Pimienta, Salsa roja, frijoles volteados o guacamol al gusto',
																		'Las famosas tostadas forman parte importante de nuestra gastronomía. Se caracteriza por ser un platillo fácil de preparar con salsas para todos los gustos. Suelen ser servidas con guacamol, frijol o salsa. Además, por encima son servidas con queso fresco y perejil.',
																		'admin'),
                                                                        (  'Chuchitos',
																		'2 manojos de hojas de mazorcas de maíz secas, 1 kilo de harina de maíz, 1/4 de kilo de manteca vegetal derretida, 1/4 de taza de aceite vegetal, 2 cucharaditas de sal y 1 cucharadita de consomé de pollo.',
																		'Los Chuchitos son fáciles de preparar en casa y forman parte importante de la gastronomía guatemalteca. Al servirlos, pueden estar acompañado por salsa de tomate, guacamol y queso duro con perejil y cebolla para darle un toque especial.',
																		'admin'),
                                                                        (  'Tacos guatemaltecos',
																		'3 papas grandes hervidas, 20 tortillas de maíz, 1 manojo pequeño de cilantro y 1/2 taza de queso fresco',
																		'Los tacos en Guatemala son servidos fritos y rellenos de distintas carnes. Además, suelen venir con distintas salsas tradicionales, queso, perejil y mucho más.',
																		'admin'),
                                                                        (  'Garnachas',
																		'1/2 libra de carne picada, cocida, 1 cebolla cortada en cuadros, 3 tomates, 1 diente de ajo, 1 lechuga cortada en juliana, en tiras finas y largas, 10 tortillas de maíz, 1 cucharada de aceite de oliva, 1 taza de aceite, Salsa de tomate, mayonesa y mostaza y 1 limón.',
																		'Las Garnachas son parte de esos platillos típicos guatemaltecos que te dejan con ganas de comer más y más. De hecho, es una de las comidas que más se venden en las ferias nacionales y patronales.',
																		'admin'),
                                                                        (  'Mixtas',
																		'Tortillas, Salchichas, Mayonesa, Mostaza (opcional), Aguacates, Ketchup, Repollo y Aceite.',
																		'Las mixtas son consideradas una versión guatemalteca de los hot dogs, en este caso en lugar de pan se utilizan tortillas de maíz y acompañadas de otros ingredientes que hacen de ellas un platillo único.',
																		'admin'); 
                                                                          
