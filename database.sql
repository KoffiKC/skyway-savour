
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "cohort" VARCHAR (32)
);

CREATE TABLE "locations" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL,
    "image_url" VARCHAR (1000) NOT NULL,
    "description" VARCHAR (255),
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "price_status" VARCHAR (10) NOT NULL
);

CREATE TABLE "reviews" (
    "id" SERIAL PRIMARY KEY,
    "rating" INT NOT NULL,
    "review" VARCHAR (1000),
    "user_id" INT references "users",
    "location_id" INT references "locations"
);
    

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "food_types" (
    "id" SERIAL PRIMARY KEY,
    "food_type" VARCHAR (80) UNIQUE NOT NULL
);

CREATE TABLE "locations_food" (
	"id" SERIAL PRIMARY KEY,
	"location_id" INT references "locations",
    "food_id" INT references "food_types"
);

INSERT INTO "locations" ("name", "image_url", "description", "lat", "lng", "price_status")
VALUES ('Prime Digital Academy', 'https://www.yoreoyster.com/wp-content/uploads/2021/06/PDA-intro-768x356.png', 'The place that you probably are now. Lucky you!', 44.978244624967495, -93.26338220952375, '$$$$$'),
('Jimmy Johns','https://content.fortune.com/wp-content/uploads/2015/06/20130223_zaf_m42_021.jpeg','apparently the founder of jimmy johns used to kill endangered animals, but doesnt now i guess', 44.976550312222486, -93.25823673358404, '$$$'),
('Chipotle','https://media-cdn.tripadvisor.com/media/photo-s/10/75/3d/cb/chipotle-hopkins-mn-by.jpg','Do I even need to explain chipotle?', 44.977616110936715, -93.26774142051798, 4);


INSERT INTO "food_types" ("food_type")
VALUES ('sandwich'),('burrito'),('american'),('mexican'),('education'),('prime');

INSERT INTO "locations_food" ("location_id", "food_id")
VALUES (2, 1),(2, 3),(3, 2),(3, 4),(1, 5),(1, 6);



INSERT INTO "reviews" ("rating", "review", "user_id", "location_id")
VALUES (4, 'I liked it, but I wish they didnt charge so much for avocado', 2, 3);


  
 